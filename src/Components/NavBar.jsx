import { useState, useEffect } from "react"
import { HomeIcon, UserIcon, CodeIcon, MailIcon } from "./Icons.jsx"
import { ThemeToggle } from "./theme-toggle"

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home")

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
    { id: "home", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
    { id: "about", label: "About", icon: <UserIcon className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <CodeIcon className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <MailIcon className="h-5 w-5" /> },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 ml-0 md:ml-64 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">EBAD ULLAH</span>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center px-3 py-2 rounded-md text-sm
                    
                    font-medium transition-colors
                    ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    }
                  `}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

