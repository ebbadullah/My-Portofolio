export default function About() {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 55 },
    { name: "React", level: 55 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Responsive Design", level: 60 },
    { name: "UI Design", level: 50 },
  ]

  return (
    <div className="py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm EBAD ULLAH, a passionate frontend developer with a keen eye for design and user experience. I specialize
            in creating responsive, accessible, and performant web applications using modern technologies like React and
            Tailwind CSS.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            With a strong foundation in web development fundamentals and a commitment to staying current with industry
            trends, I deliver solutions that are both visually appealing and functionally robust.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enhancing my skills through continuous learning.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">My Skills</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

