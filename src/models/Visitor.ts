import mongoose, { Schema, Document } from "mongoose";

export interface IVisitor extends Document {
    ip: string;
    city: string;
    country: string;
    userAgent: string;
    deviceVendor: string;
    deviceModel: string;
    createdAt: Date;
}

const VisitorSchema: Schema = new Schema({
    ip: { type: String, required: true },
    city: { type: String, default: "Unknown" },
    country: { type: String, default: "Unknown" },
    userAgent: { type: String, required: true },
    deviceVendor: { type: String, default: "Unknown" },
    deviceModel: { type: String, default: "Unknown" },
    createdAt: { type: Date, default: Date.now }
});

const Visitor = mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", VisitorSchema);

export default Visitor;
