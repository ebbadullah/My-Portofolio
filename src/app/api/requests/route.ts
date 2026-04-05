import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import RequestModel from "@/models/Request";

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const data = await req.json();
        const { name, email, subject, message } = data;

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newRequest = new RequestModel({ name, email, subject, message });
        await newRequest.save();

        return NextResponse.json({ success: true, request: newRequest }, { status: 201 });
    } catch (error) {
        console.error("Error saving request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        // Fetch securely and sort by newest first
        const requests = await RequestModel.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, requests }, { status: 200 });
    } catch (error) {
        console.error("Error fetching requests:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
