"use client"

import { useState, useEffect } from "react"
import { ArrowRightIcon } from "./Icons.jsx"


export default function Home() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = ["Frontend Developer", "UI/UX Enthusiast", "React Specialist"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <div className="flex flex-col justify-center items-start h-screen px-6 md:px-12 lg:px-24">
      <div className="relative z-10">
        <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide">Hello, I'm</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          EBAD ULLAH
        </h1>

        <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-16 flex items-center">
          <span>{text}</span>
          <span className="ml-1 w-1 h-8 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8 text-lg leading-relaxed">
          I create responsive, user-friendly web applications with modern technologies. Let's build something amazing
          together.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
            <ArrowRightIcon className="h-4 w-4" />
          </button>

          <button
            className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 -z-10 opacity-10 dark:opacity-5">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
        </svg>
      </div>
    </div>
  )
}

