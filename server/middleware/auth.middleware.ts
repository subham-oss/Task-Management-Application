import { type Request, type Response } from "express";
import jwt from "jsonwebtoken";


export const authMiddleware = (req: Request, res: Response, next: () => void) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.body = decoded;
        next();
    }
    catch(err: any){
        res.status(500).json({ message: err.message });
    }
    
}