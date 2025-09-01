import { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
                <div className="text-center">
                    <div className="inline-block w-16 h-16 border-4 border-blue-600 dark:border-blue-400 border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
                    <h2 className="mt-4 text-xl font-semibold text-blue-600 dark:text-blue-400">
                        Loading...
                    </h2>
                </div>
            </div>
        );
    }

    return <MainLayout />;
}

export default App;