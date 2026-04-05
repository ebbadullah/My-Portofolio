"use client";

import { Mail, User, Calendar, MessageSquare, Tag } from "lucide-react";
import { motion } from "motion/react";

interface RequestCardProps {
    request: {
        name: string;
        email: string;
        subject: string;
        message: string;
        createdAt: string;
    };
    index: number;
}

export default function RequestCard({ request, index }: RequestCardProps) {
    const formattedDate = new Date(request.createdAt).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare size={80} className="text-blue-500" />
            </div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between border-b dark:border-gray-700 pb-4 mb-5 gap-4">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-500" />
                            {request.name}
                        </h3>
                        <a 
                            href={`mailto:${request.email}`} 
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            {request.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-3 py-1.5 rounded-full h-fit self-start md:self-center border border-blue-100 dark:border-blue-800/30">
                        <Calendar className="w-3.5 h-3.5" />
                        {formattedDate}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <p className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5" />
                            Subject
                        </p>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {request.subject}
                        </h4>
                    </div>

                    <div className="space-y-1.5 bg-gray-50 dark:bg-gray-900/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                        <p className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">
                            Message
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed text-sm">
                            {request.message}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
