"use client";

import { useEffect, useState } from "react";
import { User, MapPin, Globe, Clock, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function VisitorLog() {
    const [visitors, setVisitors] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const res = await fetch("/api/visitors");
                const data = await res.json();
                if (res.ok) {
                    setVisitors(data.visitors);
                }
            } catch (error) {
                console.error("Failed to fetch visitors:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchVisitors();
    }, []);

    if (loading) {
        return <div className="space-y-4">{[1, 2, 3].map(i => <div key={i} className="h-20 bg-white dark:bg-gray-800 animate-pulse rounded-xl" />)}</div>;
    }

    return (
        <div className="space-y-4">
            <AnimatePresence>
                {visitors.map((visitor, i) => (
                    <motion.div
                        key={visitor._id || i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-full">
                                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    {visitor.ip}
                                    <span className="text-[10px] bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-100 dark:border-blue-800/30 font-bold uppercase tracking-tighter">
                                        {visitor.deviceVendor} {visitor.deviceModel !== "Unknown" ? visitor.deviceModel : ""}
                                    </span>
                                </h4>
                                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span className="flex items-center gap-1 font-medium">
                                        <MapPin className="w-3 h-3" /> {visitor.city}, {visitor.country}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 justify-between md:justify-end">
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300">
                                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                                    {new Date(visitor.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                                    {new Date(visitor.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="hidden lg:block max-w-[140px] truncate text-[10px] bg-gray-50 dark:bg-gray-900/60 px-2.5 py-1.5 rounded-lg text-gray-500 font-mono border border-gray-100 dark:border-gray-800" title={visitor.userAgent}>
                                <Monitor className="w-3 h-3 inline mr-1.5 text-blue-500" />
                                {visitor.userAgent}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
