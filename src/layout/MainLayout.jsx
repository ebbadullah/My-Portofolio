import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { ThemeToggle } from "../Context/Theme-toggle";

import MobileHome from "../Mobile View/MobileHome";
import MobileAbout from "../Mobile View/MobileAbout";
import MobileProjects from "../Mobile View/MobileProjects";
import MobileContact from "../Mobile View/MobileContact";
import MobileNavBar from "../Mobile View/MobileNavBar";
import useMobileDetection from "../Mobile View/MobileDetection";

const MainLayout = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const isMobile = useMobileDetection();

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (isMobile) {
        return (
            <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
                <MobileNavBar />

                {/* Main Content */}
                <main className="flex-1 overflow-auto dark:text-white pt-14 pb-16">
                    <section id="home" className="min-h-screen">
                        <MobileHome />
                    </section>

                    <section id="about" className="min-h-screen">
                        <MobileAbout />
                    </section>

                    <section id="projects" className="min-h-screen">
                        <MobileProjects />
                    </section>

                    <section id="contact" className="min-h-screen">
                        <MobileContact />
                    </section>

                    <footer className="py-4 px-4 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 text-sm">
                        <p>© {new Date().getFullYear()} EBAD ULLAH. All rights reserved.</p>
                        <p className="mt-1 text-xs">
                            Made with <span className="text-red-500">❤</span> using React &
                            Tailwind CSS
                        </p>
                    </footer>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className={`fixed bottom-20 right-4 p-2 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 ${scrollProgress > 20
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="fixed top-4 right-4 z-50 md:hidden">
                <ThemeToggle />
            </div>

            <Sidebar />

            <main className="flex-1 ml-0 md:ml-64 overflow-auto dark:text-white">
                <section id="home" className="min-h-screen">
                    <Home />
                </section>

                <section id="about" className="min-h-screen">
                    <About />
                </section>

                <section id="projects" className="min-h-screen">
                    <Projects />
                </section>

                <section id="contact" className="min-h-screen">
                    <Contact />
                </section>

                <footer className="py-6 px-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                    <p>© {new Date().getFullYear()} EBAD ULLAH. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        Made with <span className="text-red-500">❤</span> using React &
                        Tailwind CSS
                    </p>
                </footer>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 ${scrollProgress > 20
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            </main>
        </div>
    );
};

export default MainLayout;