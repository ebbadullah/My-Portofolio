"use client";

import { useState } from "react";
import PasswordGate from "./components/PasswordGate";
import RequestDashboardContent from "./components/RequestDashboardContent";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck } from "lucide-react";

export default function RequestsPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
            {/* Elegant Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(37,99,235,0.05)_0%,_transparent_50%),(radial-gradient(circle_at_80%_80%,_rgba(37,99,235,0.05)_0%,_transparent_50%))]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="mb-12 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4 border border-blue-100 dark:border-blue-800/30"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Admin Dashboard
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Inquiries</span>
                    </h1>
                </header>
                
                <AnimatePresence mode="wait">
                    {!isAuthenticated ? (
                        <motion.div
                            key="auth"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <RequestDashboardContent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

