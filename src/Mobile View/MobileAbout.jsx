import { useState } from "react"

export default function MobileAbout() {
    const [skills] = useState([
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 55 },
        { name: "React", level: 55 },
        { name: "Tailwind CSS", level: 60 },
        { name: "Responsive Design", level: 60 },
        { name: "UI Design", level: 50 },
    ])

    return (
        <div className="py-12 px-5 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-md">
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">About Me</span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h2>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md p-5 mb-8">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
                        I'm <span className="font-semibold text-blue-600 dark:text-blue-400">EBAD ULLAH</span>, a passionate MERN Stack Developer with a keen eye for design and user experience.
                        I specialize in building full-stack, responsive, and performant web applications using modern
                        technologies like MongoDB, Express.js, React, Node.js, and Tailwind CSS.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        With a strong foundation in web development fundamentals and a commitment to staying current with industry
                        trends, I deliver solutions that are both visually appealing and functionally robust.
                    </p>
                </div>

                <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">Expertise</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Skills</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 shadow-md">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 text-center">What I Do</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm">
                            <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Web Development</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm">
                            <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">UI/UX Design</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm">
                            <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Responsive Design</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm">
                            <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Performance</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}