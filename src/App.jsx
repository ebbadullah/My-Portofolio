import { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { ThemeProvider } from '../src/Context/Theme-Provider'

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
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
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
