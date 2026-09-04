import type { Request, Response } from "express";
import Task from "../models/Task.model.ts";

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
  try {
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
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const editTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const task = await Task.findOne({
      _id: req.params.id,
      $or: [
        { userId: userId },        // Owner
        { sharedWith: userId },    // User with permission
      ],
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found or you don't have permission",
      });
    }

    const {
      Task_Title,
      Task_Description,
      Initial_Phase_State,
      Severity_Index,
      Target_Delivery_Date,
    } = req.body;

    task.Task_Title = Task_Title;
    task.Task_Description = Task_Description;
    task.Initial_Phase_State = Initial_Phase_State;
    task.Severity_Index = Severity_Index;
    task.Target_Delivery_Date = Target_Delivery_Date;

    await task.save();

    return res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const task = await Task.findOne({
      _id: req.params.taskId,
      $or: [
        { userId: userId },       // Task owner
        { sharedWith: userId },   // Shared user
      ],
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found or you don't have permission",
      });
    }

    await task.deleteOne();

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};