import User from "../models/user.model.ts";
import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// Register function

export const register = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { Full_name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedpassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });
    const newUser = new User({
      Full_name,
      email,
      password: hashedpassword,
      tokens: [token],
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", token: token });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};



// Login function

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });
    res.json({ message: "Login successful", token });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
