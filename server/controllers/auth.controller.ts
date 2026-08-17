import User from "../models/user.model.ts";
import RefreshToken from "../models/refreshTokens.model.ts";
import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register function

export const register = async (req: Request, res: Response) => {
  try {
    const { Full_name, email, password } = req.body;
    if (!Full_name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      Full_name,
      email,
      password: hashedpassword,
    });

    await newUser.save();

    // Create Access Token
    const accessToken = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_ACCESS_SECRET as string,
      {
        expiresIn: "15m",
      },
    );

    // Create Refresh Token
    const refreshToken = jwt.sign(
      {
        userId: newUser._id,
      },
      process.env.JWT_REFRESH_SECRET as string,
      {
        expiresIn: "7d",
      }
    );


    // Calculate refresh-token expiry
    const refreshTokenExpiry = new Date();
    refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 7);

    // Store refresh-token in database
    await RefreshToken.create({
      userId: newUser._id,
      token: refreshToken,
      expiresAt: refreshTokenExpiry,
    });


    // Send refresh token as HttpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send access token to frontend
    return res.status(201).json({
      message: "User registered successfully",
      accessToken,
    });
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


