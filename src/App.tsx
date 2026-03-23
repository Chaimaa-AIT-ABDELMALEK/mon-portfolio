import './App.css'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="portfolio">
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App