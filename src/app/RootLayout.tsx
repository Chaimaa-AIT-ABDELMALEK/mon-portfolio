import { Outlet, NavLink } from 'react-router-dom'
import './RootLayout.css'

export default function RootLayout() {
  return (
    <div className="layout">
      <header className="header">
        <nav className="navbar">
          <NavLink to="/" className="brand">
            MonPortfolio
          </NavLink>

          <div className="nav-links">
            <NavLink to="/projects" className="nav-link">
              Projets
            </NavLink>
            <NavLink to="/experience" className="nav-link">
              Parcours
            </NavLink>
            <NavLink to="/education" className="nav-link">
              Formations
            </NavLink>
            <NavLink to="/certifications" className="nav-link">
              Certifications
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Chaimaa Ait Abdelmalek
      </footer>
    </div>
  )
}