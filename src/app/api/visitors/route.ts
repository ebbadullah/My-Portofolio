import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Visitor from "@/models/Visitor";
import { UAParser } from "ua-parser-js";

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        
        // Get IP from headers (standard for Next.js/Vercel)
        const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
        const userAgent = req.headers.get("user-agent") || "unknown";

        // Parse User Agent
        const parser = new UAParser(userAgent);
        const device = parser.getDevice();
        const os = parser.getOS();
        
        // Improve device detection: Use OS if vendor is missing
        const deviceVendor = device.vendor || os.name || "Unknown";
        const deviceModel = device.model || (device.type === "mobile" ? "Mobile Device" : "Unknown");
        const osInfo = `${os.name || ""} ${os.version || ""}`.trim();

        // Fetch location data from ipapi.co
        let city = "Unknown";
        let country = "Unknown";
        
        try {
            const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
            const geoData = await geoRes.json();
            if (geoData.city) city = geoData.city;
            if (geoData.country_name) country = geoData.country_name;
        } catch (geoErr) {
            console.error("Geo-location failed:", geoErr);
        }

        const newVisitor = new Visitor({ 
            ip, 
            city, 
            country, 
            userAgent: osInfo || userAgent, // Store OS info or fallback to raw UA
            deviceVendor,
            deviceModel
        });
        
        await newVisitor.save();

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error("Error logging visitor:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const visitors = await Visitor.find({}).sort({ createdAt: -1 }).limit(100);
        // Count unique visitors by IP
        const uniqueIps = await Visitor.distinct("ip");
        const totalCount = uniqueIps.length;
        
        return NextResponse.json({ success: true, visitors, totalCount }, { status: 200 });
    } catch (error) {
        console.error("Error fetching visitors:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
