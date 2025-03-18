"use client"

import { useState, useEffect } from "react"
import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import { ThemeToggle } from "./Context/Theme-toggle"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-blue-600 dark:border-blue-400 border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
          <h2 className="mt-4 text-xl font-semibold text-blue-600 dark:text-blue-400">Loading...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Mobile theme toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <ThemeToggle />
      </div>

      {/* Sidebar - fixed on left */}
      <Sidebar />

      {/* Main Content - with left margin to account for sidebar */}
      <main className="flex-1 ml-0 md:ml-64 overflow-auto dark:text-white">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="py-6 px-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          <p>© {new Date().getFullYear()} EBAD ULLAH. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with <span className="text-red-500">❤</span> using React & Tailwind CSS
          </p>
        </footer>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 ${scrollProgress > 20 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>
    </div>
  )
}

export default App

