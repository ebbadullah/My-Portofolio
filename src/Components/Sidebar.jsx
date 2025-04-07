"use client"

import { useState, useEffect } from "react"
import { HomeIcon, UserIcon, CodeIcon, MailIcon, MenuIcon, XIcon, DownloadIcon } from "./Icons.jsx"
import { ThemeToggle } from "../Context/Theme-toggle"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Determine active section
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { id: "home", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
    { id: "about", label: "About", icon: <UserIcon className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <CodeIcon className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <MailIcon className="h-5 w-5" /> },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      if (window.innerWidth < 768) {
        setIsOpen(false)
      }
    }
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white dark:bg-blue-700 shadow-lg"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Vertical scroll progress indicator */}
      <div className="fixed top-0 left-0 w-1 h-full z-50 bg-gray-200 dark:bg-gray-800">
        <div
          className="bg-blue-600 dark:bg-blue-400 h-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Sidebar - FIXED position */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-xl transition-all duration-300 ease-in-out
          border-r border-gray-200 dark:border-gray-800
          ${isOpen ? "w-64" : "-translate-x-full md:translate-x-0 md:w-64"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Profile */}
          <div className="p-6 text-center border-b border-gray-200 dark:border-gray-800">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-md">
              <img
                src="https://res.cloudinary.com/dfnpekedc/image/upload/v1741934327/gteytlkmewgayj6lfn8x.jpg"
                alt="EBAD ULLAH"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">EBAD ULLAH</h1>
            <p className="text-sm text-blue-600 dark:text-blue-400">Frontend Developer</p>

            {/* Theme toggle button */}
            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center w-full p-3 rounded-md transition-all duration-300
                      ${
                        activeSection === item.id
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }
                    `}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    <span className={`${activeSection === item.id ? "text-blue-600 dark:text-blue-400" : ""}`}>
                      {item.icon}
                    </span>
                    <span className="ml-3">{item.label}</span>
                    {activeSection === item.id && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CV Download */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 py-2 px-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/17jTz5b-W54jxg4Wz5E5jLhdLrhOs3ztN/view?usp=drive_link",
                  "_blank",
                )
              }
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

