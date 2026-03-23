import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div style={{ backgroundColor: "white", color: "black", minHeight: "100vh" }}>
      <header>
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
          <NavLink to="/" style={{ fontWeight: "bold" }}>MonPortfolio</NavLink>
          <div style={{ display: "flex", gap: "10px" }}>
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/experience">Parcours</NavLink>
            <NavLink to="/education">Formations</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "10px" }}>
        © {new Date().getFullYear()} Mon Nom
      </footer>
    </div>
  );
}