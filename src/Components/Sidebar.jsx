"use client"

import { useState, useEffect } from "react"
import { HomeIcon, UserIcon, CodeIcon, MailIcon, MenuIcon, XIcon, DownloadIcon } from "./Icons"
import { ThemeToggle } from "../Context/Theme-toggle"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white dark:bg-blue-700"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Sidebar - FIXED position */}
      <aside
        className={`
        fixed top-0 left-0 z-40 h-screen bg-blue-600 dark:bg-blue-800 text-white transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "-translate-x-full md:translate-x-0 md:w-64"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Profile */}
          <div className="p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-white mb-4 overflow-hidden">
              <img src="https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/418995736_1565407114245821_1980001325974567799_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEnNf_b48E87Ol1bs72AakB48a5l601e1TjxrmXrTV7VJXi483Ks6rdr0Gpr2il8JjGbBfNgk2JUoL_2CMuM03G&_nc_ohc=T6bojpWPSvQQ7kNvgENEK_i&_nc_oc=AdhxCpM8Qix_xrBe1NofDvT_YFyD47yOIm3WW4o6VWgMu-nWJJuapyskcypc2VnnQK8&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=EnJEJnAQ46dSLr-6dYwrQA&oh=00_AYF-Tz-HIgN4deKW1FwIl0Sk3si3UO5J8T7PHy9IabsQNg&oe=67DF39B7" alt="EBAD ULLAH" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-bold">EBAD ULLAH</h1>
            <p className="text-sm text-blue-100">Frontend Developer</p>

            {/* Theme toggle button */}
            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center w-full p-3 rounded-md transition-colors
                      ${
                        activeSection === item.id
                          ? "bg-blue-700 dark:bg-blue-900 font-medium"
                          : "hover:bg-blue-700 dark:hover:bg-blue-900"
                      }
                    `}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                    {activeSection === item.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CV Download */}
          <div className="p-4 border-t border-blue-700 dark:border-blue-900">
            <button
              className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800 py-2 px-4 rounded-md font-medium transition-colors"
              onClick={() => window.open("https://drive.google.com/file/d/17jTz5b-W54jxg4Wz5E5jLhdLrhOs3ztN/view?usp=drive_link", "_blank")}
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

