import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute -left-20 -top-20 -z-10 opacity-5 dark:opacity-5">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
        </svg>
      </div>

      <div className="max-w-md w-full text-center z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <div className="flex justify-center mb-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-full border border-red-100 dark:border-red-800/30 shadow-sm transition-transform hover:scale-110 duration-300">
                <AlertCircle className="w-16 h-16 text-red-500 dark:text-red-400" />
            </div>
        </div>
        <h1 className="text-7xl font-extrabold text-blue-600 dark:text-blue-500 mb-2 font-mono">
            404
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Oops! The page you were looking for doesn't exist, might have been moved, or is temporarily unavailable. 
        </p>
        
        <div className="flex justify-center">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
                <ArrowLeft className="w-5 h-5" />
                Return to Home
            </Link>
        </div>
      </div>
    </div>
  );
}
