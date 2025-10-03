import { useState } from "react"

export default function About() {
    const [skills] = useState([
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 },
    ])

    const [education] = useState([
  { degree: "Matriculation", institution: "Sindh Board", year: "2023-2024", details: "Completed matriculation" },
  { degree: "Intermediate (in progress)", institution: "Govt PECHS Education Foundation Science College, Karachi", year: "2025-2026", details: "Currently studying intermediate" },
  { degree: "MERN Stack Course", institution: "Techzone Learning", year: "2024", details: "Practical MERN stack training" }
]
)

    const [activeTab, setActiveTab] = useState("skills")

    return (
        <div className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column - About Me */}
                    <div className="relative">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        </h2>
                        
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

                    {/* Right Column - Skills & Education */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
                            Qualifications
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        </h2>

                        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                            <button
                                className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                                    activeTab === "skills" 
                                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" 
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                                onClick={() => setActiveTab("skills")}
                            >
                                My Skills
                            </button>
                            <button
                                className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                                    activeTab === "education" 
                                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" 
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                                onClick={() => setActiveTab("education")}
                            >
                                Education
                            </button>
                        </div>

                        {activeTab === "skills" && (
                            <div className="space-y-6">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "education" && (
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-1">
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">{edu.year}</p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        )}
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