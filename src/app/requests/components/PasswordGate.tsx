"use client";

import { useState, useEffect } from "react";
import { Lock, Key, AlertCircle, Timer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PasswordGateProps {
    onAuthenticated: () => void;
}

const LOCKOUT_DURATION = 2 * 60 * 1000; // 2 minutes
const MAX_ATTEMPTS = 3;

export default function PasswordGate({ onAuthenticated }: PasswordGateProps) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isChecking, setIsChecking] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [lockoutTime, setLockoutTime] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const storedLockout = localStorage.getItem("lockout-time");
        if (storedLockout) {
            const expiry = parseInt(storedLockout, 10);
            if (Date.now() < expiry) {
                setLockoutTime(expiry);
                setAttempts(MAX_ATTEMPTS);
            } else {
                localStorage.removeItem("lockout-time");
            }
        }
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (lockoutTime) {
            interval = setInterval(() => {
                const remaining = Math.max(0, Math.ceil((lockoutTime - Date.now()) / 1000));
                setTimeLeft(remaining);
                if (remaining === 0) {
                    setLockoutTime(null);
                    setAttempts(0);
                    localStorage.removeItem("lockout-time");
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [lockoutTime]);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (lockoutTime) return;

        setIsChecking(true);
        setError("");

        await new Promise(resolve => setTimeout(resolve, 800));

        if (password === "Ebad0321") {
            onAuthenticated();
            setAttempts(0);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            setIsChecking(false);

            if (newAttempts >= MAX_ATTEMPTS) {
                const expiry = Date.now() + LOCKOUT_DURATION;
                setLockoutTime(expiry);
                localStorage.setItem("lockout-time", expiry.toString());
                setError(`Too many attempts. Blocked for 2 minutes.`);
            } else {
                setError(`Incorrect Password. ${MAX_ATTEMPTS - newAttempts} attempts remaining.`);
            }
        }
    };

    return (
        <div className="flex items-center justify-center py-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                
                <div className="flex justify-center mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full border border-blue-100 dark:border-blue-800/30">
                        {lockoutTime ? <Timer className="w-10 h-10 text-red-500 animate-pulse" /> : <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400" />}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    {lockoutTime ? "Security Lockout" : "Admin Access"}
                </h2>
                
                <form onSubmit={handleVerify} className="space-y-6 mt-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Key className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={!!lockoutTime || isChecking}
                            className={`block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${lockoutTime ? "opacity-50 cursor-not-allowed" : ""}`}
                            placeholder="••••••••"
                        />
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-800/30"
                            >
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={!!lockoutTime || isChecking}
                        className={`w-full flex justify-center py-3 px-4 rounded-xl shadow-md text-sm font-bold text-white transition-all duration-300 ${lockoutTime ? "bg-red-500/50" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                        {lockoutTime ? `Try again in ${timeLeft}s` : isChecking ? "Verifying..." : "Unlock Dashboard"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
