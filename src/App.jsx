import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContectSection'

function App() {
  return (
    <Router>
        <HeroSection />
        <div id="projects">
            <ProjectsSection />
        </div>
        <div id='skills'>
            <SkillsSection />
        </div>
        <div id='contact'>
            <ContactSection />
        </div>
    </Router>
  )
}

export default App