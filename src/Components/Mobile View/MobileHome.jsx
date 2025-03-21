"use client"

import { useState, useEffect } from "react"
import { ArrowRightIcon } from "../Icons"

export default function MobileHome() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = ["Frontend Developer", "UI Enthusiast", "React Specialist"]

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
    <div className="flex flex-col justify-center min-h-screen px-5 pt-14 pb-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Profile image for mobile */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-lg">
          <img
            src="https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/456039248_1703929367060261_2775393133703123537_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFgolxL-fiD7W89cnGGYWLUo6vVrDZIaK6jq9WsNkhorj2Ja3s6MlMrSK8s3HqvwX9yCiqF_28Meq4rz096OoSy&_nc_ohc=68D71CEmq9wQ7kNvgFkA5DJ&_nc_oc=AdiCAFISOKfoATl5c1kK3C4IlfWtAHFipssqENUMfmjhkgfjfsQdjm7d0dc1dTHbs80&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=itlj1uj0fEJxbARKNo5pFw&oh=00_AYFI2IfR5lo-8hZnmLPTU7xS9OwqPdvgj1Lzd4aoYgsgSQ&oe=67DF36E4"
            alt="EBAD ULLAH"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            Hello, I'm
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            EBAD ULLAH
          </h1>

          <div className="h-8 flex items-center justify-center">
            <span className="text-xl font-medium text-blue-600 dark:text-blue-400">{text}</span>
            <span className="ml-1 w-1 h-6 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg mb-8 text-center">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I create responsive, user-friendly web applications with modern technologies. Let's build something amazing together.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <button
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
            <ArrowRightIcon className="h-4 w-4" />
          </button>

          <button
            className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 -z-10 opacity-10 dark:opacity-5">
        <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-0 -z-10 opacity-10 dark:opacity-5">
        <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="80" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
        </svg>
      </div>
    </div>
  )
}
