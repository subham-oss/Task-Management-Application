import User from '../models/user.model.ts';
import { type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req: Request, res: Response) => {
    try{
        const { Full_name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({message: "User already exists"});

        const hashedpassword = await bcrypt.hash(password, 10);
        const token = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const newUser = new User({ Full_name, email, password: hashedpassword, tokens: [token] });
        await newUser.save();
        res.status(201).json({message: "User registered successfully", token:token});

    }
    catch(err: any){
        res.status(500).json({message: err.message})
    }
}