"use client";

import { useState, useEffect } from "react";
import { MessageSquare, LayoutDashboard, RefreshCcw, Search, Inbox, Users, Activity } from "lucide-react";
import RequestCard from "./RequestCard";
import VisitorLog from "./VisitorLog";
import { motion, AnimatePresence } from "motion/react";

export default function RequestDashboardContent() {
    const [activeTab, setActiveTab] = useState<"requests" | "visitors">("requests");
    const [requests, setRequests] = useState<any[]>([]);
    const [visitorCount, setVisitorCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const [reqRes, visRes] = await Promise.all([
                fetch("/api/requests"),
                fetch("/api/visitors")
            ]);
            
            const reqData = await reqRes.json();
            const visData = await visRes.json();

            if (reqRes.ok) setRequests(reqData.requests);
            if (visRes.ok) setVisitorCount(visData.totalCount || 0);
            
            if (!reqRes.ok) setError(reqData.error || "Failed to fetch data");
        } catch (err) {
            setError("Network error occurred.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredRequests = requests.filter(req => 
        req.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        req.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 py-6">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-500/30">
                        <LayoutDashboard className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Console</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Overview of your portfolio activity</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {activeTab === "requests" && (
                        <div className="relative flex-1 md:w-64">
                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                             <input 
                                type="text" 
                                placeholder="Filter queries..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                             />
                        </div>
                    )}
                    <button 
                        onClick={fetchData}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                        <RefreshCcw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
                    </button>
                </div>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4 relative overflow-hidden group">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <Inbox className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Inquiries</p>
                        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">{requests.length}</h3>
                    </div>
                    <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-500 opacity-5 group-hover:opacity-10 transition-opacity" />
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4 relative overflow-hidden group">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                        <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Visitors</p>
                        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">{visitorCount}</h3>
                    </div>
                    <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-green-500 opacity-5 group-hover:opacity-10 transition-opacity" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b dark:border-gray-700">
                <button 
                    onClick={() => setActiveTab("requests")}
                    className={`pb-4 px-6 text-sm font-bold transition-all border-b-2 ${activeTab === "requests" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-400 hover:text-gray-200"}`}
                >
                    Messages
                </button>
                <button 
                    onClick={() => setActiveTab("visitors")}
                    className={`pb-4 px-6 text-sm font-bold transition-all border-b-2 ${activeTab === "visitors" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-400 hover:text-gray-200"}`}
                >
                    Visitor Log
                </button>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                {activeTab === "requests" ? (
                    <motion.div 
                        key="requests-list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 xl:grid-cols-2 gap-8"
                    >
                        {filteredRequests.map((req, i) => (
                            <RequestCard key={req._id || i} request={req} index={i} />
                        ))}
                        {filteredRequests.length === 0 && !loading && (
                            <div className="col-span-full py-12 text-center text-gray-500 font-medium bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                                No messages found.
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div 
                        key="visitors-list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <VisitorLog />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
