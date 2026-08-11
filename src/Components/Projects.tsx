"use client";

import { ExternalLinkIcon, GithubIcon } from "./Icons";
import { projectsData, Project } from "@/data/projectsData";

export default function Projects() {
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

                {/* FULL VIEW INDEX PRESENTATION SHOWCASE */}
                <div className="space-y-16">
                    {projectsData.map((project: Project) => (
                        <div
                            key={project.id}
                            className="group bg-gray-50/80 dark:bg-gray-800/40 p-8 md:p-12 rounded-[2.5rem] border border-gray-200/80 dark:border-gray-700/60 shadow-xl flex flex-col lg:flex-row items-center gap-10 lg:gap-14 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl overflow-hidden"
                        >
                            {/* Project Text Information */}
                            <div className="w-full lg:w-5/12 space-y-5">
                                <div>
                                    {project.subtitle && (
                                        <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-1">
                                            {project.subtitle}
                                        </span>
                                    )}
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3.5 py-1.5 font-semibold bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Dual Action Buttons: Live Demo + GitHub Code */}
                                <div className="flex items-center gap-3 pt-4">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 transform active:scale-95 cursor-pointer group/btn"
                                    >
                                        <span>Live Demo</span>
                                        <ExternalLinkIcon className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer group/git"
                                    >
                                        <GithubIcon className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover/git:scale-110 transition-transform" />
                                        <span>GitHub Code</span>
                                    </a>
                                </div>
                            </div>

                            {/* 100% Full Uncropped Screenshot Stage with Smooth Hover Zoom */}
                            <div className="w-full lg:w-7/12">
                                <div className="bg-gray-950 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden group/frame transition-all duration-500 ease-in-out hover:shadow-blue-500/20 hover:border-gray-600">
                                    <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono text-slate-400 truncate max-w-[240px]">
                                            {project.url.replace("https://", "").replace("www.", "")}
                                        </span>
                                    </div>
                                    <div className="relative w-full aspect-[16/10] bg-gray-950 p-3 flex items-center justify-center overflow-hidden">
                                        {/* Overlay fades very slowly on hover */}
                                        <div
                                            className="absolute inset-0 bg-black/20 group-hover/frame:opacity-0 z-10 pointer-events-none"
                                            style={{ transition: 'opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                                        ></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain group-hover/frame:scale-[1.05]"
                                            style={{ willChange: 'transform', transition: 'transform 1200ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                target.style.display = "none";
                                                if (target.parentElement) {
                                                    const fallback = document.createElement("div");
                                                    fallback.className = "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-6 text-center";
                                                    fallback.innerHTML = `<span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Project #${project.id}</span><span class="text-lg font-bold text-white">${project.title}</span>`;
                                                    target.parentElement.appendChild(fallback);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}