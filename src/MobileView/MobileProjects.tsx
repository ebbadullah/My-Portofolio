"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon, GithubIcon } from "@/Components/Icons";
import { projectsData, Project } from "@/data/projectsData";

export default function MobileProjects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(6);

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
        <section className="py-12 px-4 relative bg-white dark:bg-gray-900" id="projects">
            <div className="mx-auto">
                {/* Heading matching other sections */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative inline-block">
                        My Projects
                        <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                        Explore my recent production projects, WebAR applications, e-commerce stores, and AI platforms.
                    </p>
                </div>

                {/* Mobile Grid Showcase */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projectsData.slice(0, visibleCount).map((project: Project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-slate-900/60 rounded-xl card-thumbnail-border overflow-hidden flex items-center justify-center p-2 mb-3">
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-600/35 via-blue-400/20 to-transparent rounded-bl-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = "none";
                                        if (target.parentElement) {
                                            const fallback = document.createElement("div");
                                            fallback.className = "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-3 text-center";
                                            fallback.innerHTML = `<span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Project #${project.id}</span><span class="text-xs font-bold text-white">${project.title}</span>`;
                                            target.parentElement.appendChild(fallback);
                                        }
                                    }}
                                />
                            </div>

                            <div className="flex items-end justify-between gap-3 px-1">
                                <div className="space-y-0.5">
                                    <div className="relative inline-block pb-0.5">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                                            {project.title.split("—")[0]}
                                        </h3>
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-500 ease-out group-hover:w-full"></span>
                                    </div>

                                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium line-clamp-1">
                                        {project.subtitle || project.category}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(project);
                                    }}
                                    className="group/btn w-9 h-9 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-white transition-all duration-500 shrink-0 relative overflow-hidden cursor-pointer"
                                    aria-label="View details"
                                >
                                    <div className="relative w-4 h-4 mx-auto overflow-hidden">
                                        <svg
                                            className="w-4 h-4 absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover/btn:translate-x-full group-hover/btn:-translate-y-full"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 absolute inset-0 text-white transition-transform duration-500 ease-in-out transform -translate-x-full translate-y-full group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
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

                {/* LOAD MORE BUTTON */}
                {visibleCount < projectsData.length && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl cursor-pointer"
                        >
                            <span>Load More Projects</span>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* RESPONSIVE POPUP MODAL */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl max-w-lg w-full p-5 relative text-gray-900 dark:text-white shadow-2xl overflow-hidden my-auto max-h-[88vh] overflow-y-auto hide-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-600 hover:text-white text-gray-700 dark:text-gray-200 flex items-center justify-center transition-colors z-20 cursor-pointer shadow-md border border-gray-200 dark:border-gray-700"
                                aria-label="Close modal"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-4 pt-2">
                                <div className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden shadow-xl">
                                    <div className="bg-slate-900 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 truncate max-w-[150px]">
                                            {selectedProject.url.replace("https://", "").replace("www.", "")}
                                        </span>
                                    </div>
                                    <div className="relative w-full h-[240px] bg-gray-950 p-2 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[11px] font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-1">
                                        Featured — {selectedProject.subtitle || selectedProject.category}
                                    </span>
                                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4">
                                        {selectedProject.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {selectedProject.highlights.map((highlight, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] px-2.5 py-1 font-semibold bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded-lg border border-gray-200 dark:border-gray-700"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 pt-1">
                                        <a
                                            href={selectedProject.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center flex-1 gap-1.5 px-4 py-2.5 rounded-md text-xs font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                                        >
                                            <span>Explore Website</span>
                                            <ExternalLinkIcon className="w-3.5 h-3.5 ml-1 text-white" />
                                        </a>

                                        {selectedProject.githubUrl && (
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center flex-1 gap-1.5 px-4 py-2.5 rounded-md text-xs font-medium border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                                            >
                                                <GithubIcon className="w-3.5 h-3.5 mr-1" />
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