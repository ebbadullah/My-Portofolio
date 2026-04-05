import mongoose, { Schema, Document } from "mongoose";

export interface IRequest extends Document {
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
}

const RequestSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Request = mongoose.models.Request || mongoose.model<IRequest>("Request", RequestSchema);

export default Request;
