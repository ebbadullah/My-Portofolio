import { useState } from "react"

export default function About() {
    const [skills] = useState([
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 55 },
        { name: "React", level: 55 },
        { name: "Tailwind CSS", level: 60 },
        { name: "Responsive Design", level: 60 },
        { name: "UI Design", level: 50 },
    ])

    return (
        <div className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
                    About Me
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Who I Am</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I'm EBAD ULLAH, a passionate MERN Stack Developer with a keen eye for design and user experience.
                            I specialize in building full-stack, responsive, and performant web applications using modern
                            technologies like MongoDB, Express.js, React, Node.js, and Tailwind CSS.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            With a strong foundation in web development fundamentals and a commitment to staying current with industry
                            trends, I deliver solutions that are both visually appealing and functionally robust.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                            enhancing my skills through continuous learning.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">My Skills</h3>
                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="group">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -left-20 -bottom-20 -z-10 opacity-5 dark:opacity-5">
                <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
                </svg>
            </div>
        </div>
    )
}