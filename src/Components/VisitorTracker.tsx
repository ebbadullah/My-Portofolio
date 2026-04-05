"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
    useEffect(() => {
        const trackVisit = async () => {
            // Only track once per visitor to avoid noise
            const hasTracked = localStorage.getItem("portfolio-tracked");
            if (hasTracked) return;

            try {
                await fetch("/api/visitors", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                });
                localStorage.setItem("portfolio-tracked", "true");
            } catch (error) {
                console.error("Failed to track visit:", error);
            }
        };

        trackVisit();
    }, []);

    return null; // This component doesn't render anything
}
