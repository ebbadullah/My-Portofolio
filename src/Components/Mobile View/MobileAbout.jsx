"use client"

import { useState } from "react"

export default function MobileAbout() {
  const [skills, setSkills] = useState([
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 55 },
    { name: "React", level: 55 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Responsive Design", level: 60 },
    { name: "UI Design", level: 50 },
  ])

  return (
    <div className="py-12 px-4 relative overflow-hidden">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
          About Me
          <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              I'm EBAD ULLAH, a passionate frontend developer with a keen eye for design and user experience. I
              specialize in creating responsive, accessible, and performant web applications using modern technologies
              like React and Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              With a strong foundation in web development fundamentals and a commitment to staying current with industry
              trends, I deliver solutions that are both visually appealing and functionally robust.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

