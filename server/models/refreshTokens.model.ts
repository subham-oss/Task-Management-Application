import mongoose, {Schema, Document} from "mongoose";

export interface IRefreshToken extends Document {
    userId: mongoose.Types.ObjectId;
    token: string;
    createdAt: Date;
    expiresAt: Date;
}

const RefreshTokenSchema: Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 },
    },
})

const RefreshToken = mongoose.model<IRefreshToken>(
    "RefreshToken",
    RefreshTokenSchema
);

export default RefreshToken;