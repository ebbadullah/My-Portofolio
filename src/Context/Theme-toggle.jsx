"use client"

import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "../Components/Icons"

export function ThemeToggle() {
  const [theme, setTheme] = useState("light")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Load theme from localStorage on initial render
    const savedTheme =
      localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!isMounted) {
    return <div className="w-10 h-10"></div> // Prevents hydration mismatch
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-full flex items-center justify-center
        transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50"
            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
        }
      `}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
      <span className={`absolute transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}>
        <SunIcon className="h-5 w-5" />
      </span>
      <span className={`absolute transition-opacity duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}>
        <MoonIcon className="h-5 w-5" />
      </span>
    </button>
  )
}

