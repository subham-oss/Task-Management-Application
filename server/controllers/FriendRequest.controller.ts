import type { Request, Response } from "express";
import Friend from "../models/friend.model.ts";

export const sendFriendRequest = async (
  req: Request,
  res: Response
) => {
  try {
    const requesterId = req.user?.userId;
    const { receiverId } = req.body;

    if (!requesterId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!receiverId) {
      return res.status(400).json({
        message: "Receiver ID is required",
      });
    }

    if (requesterId === receiverId) {
      return res.status(400).json({
        message: "You cannot send a friend request to yourself",
      });
    }

    const existingRequest = await Friend.findOne({
      $or: [
        {
          requester: requesterId,
          receiver: receiverId,
        },
        {
          requester: receiverId,
          receiver: requesterId,
        },
      ],
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "Friend request already exists",
      });
    }

    const friendRequest = await Friend.create({
      requester: requesterId,
      receiver: receiverId,
      status: "pending",
    });

    return res.status(201).json({
      message: "Friend request sent successfully",
      friendRequest,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const acceptFriendRequest = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.user?.userId;
    const { friendId } = req.params;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const request = await Friend.findOne({
      _id: friendId,
      receiver: userId,
      status: "pending",
    });

    if (!request) {
      return res.status(404).json({
        message: "Friend request not found",
      });
    }

    request.status = "accepted";

    await request.save();

    return res.status(200).json({
      message: "Friend request accepted",
      request,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};