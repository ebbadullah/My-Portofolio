"use client"

import { useState, useEffect } from "react"
import { HomeIcon, UserIcon, CodeIcon, MailIcon } from "../Icons"
import { ThemeToggle } from "../../Context/Theme-toggle"

export default function MobileNavBar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "home", label: "Home", icon: <HomeIcon className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <UserIcon className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <CodeIcon className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <MailIcon className="h-4 w-4" /> },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Fixed top header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 h-14 flex items-center px-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">EBAD ULLAH</span>
          </div>

          {/* Menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-800">
            {isMenuOpen ? (
              <svg
                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-14 right-0 z-30 w-64 h-screen bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-center">
          <ThemeToggle />
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center w-full p-2.5 rounded-md transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }
                  `}
                >
                  <span className={`${activeSection === item.id ? "text-blue-600 dark:text-blue-400" : ""}`}>
                    {item.icon}
                  </span>
                  <span className="ml-3 text-sm">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
          <button
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/17jTz5b-W54jxg4Wz5E5jLhdLrhOs3ztN/view?usp=drive_link",
                "_blank",
              )
            }
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </button>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around items-center h-16">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              flex flex-col items-center justify-center h-full w-full
              ${activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}
            `}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}

