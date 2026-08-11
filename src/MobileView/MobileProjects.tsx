"use client";

import { ExternalLinkIcon, GithubIcon } from "@/Components/Icons";
import { projectsData, Project } from "@/data/projectsData";

export default function MobileProjects() {
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

                {/* Mobile Full Index View */}
                <div className="space-y-8">
                    {projectsData.map((project: Project) => (
                        <div
                            key={project.id}
                            className="bg-gray-50/80 dark:bg-gray-800/50 p-5 rounded-3xl border border-gray-200/80 dark:border-gray-700/60 shadow-lg space-y-4 transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-xl group">
                                <div className="bg-slate-900 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[150px]">
                                        {project.url.replace("https://", "").replace("www.", "")}
                                    </span>
                                </div>
                                <div className="relative w-full aspect-[16/10] bg-gray-950 p-2 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = "none";
                                            if (target.parentElement) {
                                                const fallback = document.createElement("div");
                                                fallback.className = "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-4 text-center";
                                                fallback.innerHTML = `<span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Project #${project.id}</span><span class="text-xs font-bold text-white">${project.title}</span>`;
                                                target.parentElement.appendChild(fallback);
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                {project.subtitle && (
                                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                                        {project.subtitle}
                                    </span>
                                )}
                                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.highlights.map((highlight, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] px-2.5 py-1 font-semibold bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded-lg border border-gray-200 dark:border-gray-700"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 flex-1 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-md active:scale-95 cursor-pointer"
                                    >
                                        <span>Live Demo</span>
                                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 flex-1 px-4 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 shadow-md active:scale-95 cursor-pointer"
                                    >
                                        <GithubIcon className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                                        <span>GitHub Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}