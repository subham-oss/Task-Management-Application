import mongoose, { Schema, Document } from 'mongoose';

export interface IFriend extends Document {
    requester: mongoose.Types.ObjectId;
    receiver: mongoose.Types.ObjectId;
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: Date;
}

const friendSchema: Schema<IFriend> = new Schema(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Friend = mongoose.model<IFriend>("Friend", friendSchema);
export default Friend;