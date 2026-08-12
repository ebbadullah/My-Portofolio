"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon, GithubIcon } from "./Icons";
import { projectsData, Project } from "@/data/projectsData";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(6);

    // Prevent background scroll when modal is active
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 6, projectsData.length));
    };

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 relative bg-white dark:bg-gray-900" id="projects">
            <div className="max-w-7xl mx-auto">
                {/* Heading matching Home/About/Contact exact layout */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
                        My Projects
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed text-base md:text-lg">
                        Explore my recent production projects, WebAR applications, e-commerce stores, and AI platforms built for real clients and businesses.
                    </p>
                </div>

                {/* 2 CARDS PER ROW GRID SHOWCASE (EXPANDED THUMBNAIL & ANIMATED TITLE UNDERLINE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projectsData.slice(0, visibleCount).map((project: Project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Top Image Container: Expanded Width & Compact Bottom-Left Corner Hover Glow */}
                            <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-slate-900/60 rounded-[1.5rem] card-thumbnail-border overflow-hidden flex items-center justify-center p-2 md:p-3 mb-4">
                                {/* Small Bottom-Left Corner Gradient Glow on Hover */}
                                <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-blue-600/35 via-blue-400/20 to-transparent rounded-bl-[1.5rem] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = "none";
                                        if (target.parentElement) {
                                            const fallback = document.createElement("div");
                                            fallback.className = "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-6 text-center";
                                            fallback.innerHTML = `<span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Project #${project.id}</span><span class="text-base font-bold text-white">${project.title}</span>`;
                                            target.parentElement.appendChild(fallback);
                                        }
                                    }}
                                />
                            </div>

                            {/* Bottom Text Area: Title with Left-to-Right Animated Underline */}
                            <div className="flex items-end justify-between gap-4 px-1">
                                <div className="space-y-1">
                                    <div className="relative inline-block pb-0.5">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                                            {project.title.split("—")[0]}
                                        </h3>
                                        {/* Animated Underline: Left to Right on Card Hover */}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-500 ease-out group-hover:w-full"></span>
                                    </div>

                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium line-clamp-1">
                                        {project.subtitle || project.category}
                                    </p>
                                </div>

                                {/* Arrow Button: ONLY ANIMATES WHEN HOVERING DIRECTLY ON BUTTON */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(project);
                                    }}
                                    className="group/btn w-11 h-11 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-white transition-all duration-500 shadow-sm shrink-0 relative overflow-hidden cursor-pointer"
                                    aria-label="View project details"
                                >
                                    <div className="relative w-5 h-5 mx-auto overflow-hidden">
                                        {/* Default Arrow: slides top-right ONLY on button hover */}
                                        <svg
                                            className="w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover/btn:translate-x-full group-hover/btn:-translate-y-full"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                        {/* Incoming Arrow: slides in from bottom-left ONLY on button hover */}
                                        <svg
                                            className="w-5 h-5 absolute inset-0 text-white transition-transform duration-500 ease-in-out transform -translate-x-full translate-y-full group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LOAD MORE BUTTON WITH HIGHLY VISIBLE ANIMATED BORDER */}
                {visibleCount < projectsData.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl cursor-pointer"
                        >
                            <span>Load More Projects</span>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* BALANCED RESPONSIVE POPUP MODAL SHOWCASE */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl md:rounded-3xl max-w-5xl w-full p-6 md:p-8 relative text-gray-900 dark:text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] overflow-y-auto hide-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-600 hover:text-white text-gray-700 dark:text-gray-200 flex items-center justify-center transition-colors duration-300 z-20 cursor-pointer shadow-md border border-gray-200 dark:border-gray-700"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Main Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left Side: Large Tall Mockup Image Stage */}
                                <div className="lg:col-span-6 w-full flex flex-col justify-center">
                                    <div className="bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-xl">
                                        <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <span className="text-xs font-mono text-slate-400 truncate max-w-[220px]">
                                                {selectedProject.url.replace("https://", "").replace("www.", "")}
                                            </span>
                                        </div>
                                        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[430px] bg-gray-950 p-2 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    target.style.display = "none";
                                                    if (target.parentElement) {
                                                        const fallback = document.createElement("div");
                                                        fallback.className = "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-6 text-center";
                                                        fallback.innerHTML = `<span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Project #${selectedProject.id}</span><span class="text-lg font-bold text-white">${selectedProject.title}</span>`;
                                                        target.parentElement.appendChild(fallback);
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Information & Action Buttons */}
                                <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
                                    <div>
                                        <span className="text-xs md:text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-1">
                                            Featured — {selectedProject.subtitle || selectedProject.category}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
                                            {selectedProject.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                        {selectedProject.description}
                                    </p>

                                    {/* Tech Highlights */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {selectedProject.highlights.map((highlight, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3.5 py-1.5 font-semibold bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded-xl border border-gray-200 dark:border-gray-700"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons Row with Highly Visible Animated Borders */}
                                    <div className="flex flex-wrap items-center gap-3 pt-3">
                                        {/* Explore Website Button */}
                                        <a
                                            href={selectedProject.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl cursor-pointer"
                                        >
                                            <span>Explore Website</span>
                                            <ExternalLinkIcon className="w-4 h-4 text-white" />
                                        </a>

                                        {/* GitHub Button */}
                                        {selectedProject.githubUrl && (
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer"
                                            >
                                                <GithubIcon className="w-4 h-4" />
                                                <span>GitHub Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}