import mongoose, { Schema, Document } from "mongoose";

interface Task extends Document {
  userId: mongoose.Types.ObjectId;
  Task_Title: string;
  Task_Description: string;
  Initial_Phase_State: string;
  Severity_Index: string;
  Target_Delivery_Date: Date;
  createdAt: Date;
}

const taskSchema: Schema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  sharedWith: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  Task_Title: {
    type: String,
    required: true,
  },
  Task_Description: {
    type: String,
    required: true,
  },
  Initial_Phase_State: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    required: true,
  },
  Severity_Index: {
    type: String,
    enum: ["Low Severity", "Medium Severity", "High Severity"],
    required: true,
  },
  Target_Delivery_Date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model<Task>("Task", taskSchema);
