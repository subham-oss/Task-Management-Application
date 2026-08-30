import type { Request, Response } from "express";
import  Task  from "../models/Task.model.ts";


export const createTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const {
      Task_Title,
      Task_Description,
      Initial_Phase_State,
      Severity_Index,
      Target_Delivery_Date,
    } = req.body;

    const task = await Task.create({
      userId,
      Task_Title,
      Task_Description,
      Initial_Phase_State,
      Severity_Index,
      Target_Delivery_Date,
    });

    return res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};


export const getTasks = async (req: Request, res: Response) => {
  try{
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const tasks = await Task.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Tasks retrieved successfully",
      tasks,
    })
  }
  catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
}