export default function Projects() {
  return (
    <section className="page">
      <h1 className="page-title">Projets</h1>
      <p className="page-text">
        Voici quelques projets réalisés dans le cadre de mes études et de ma pratique.
      </p>

      <div className="cards-grid">
        <div className="card">
          <h3>Portfolio React</h3>
          <p>
            Développement d’un portfolio moderne avec React et TypeScript.
          </p>
        </div>

        <div className="card">
          <h3>Application de gestion</h3>
          <p>
            Application avec JSP, Servlet et Hibernate pour gérer des utilisateurs et produits.
          </p>
        </div>

        <div className="card">
          <h3>Projet Spring Boot</h3>
          <p>
            API backend avec Spring Boot, JPA et MySQL pour la gestion de données.
          </p>
        </div>
      </div>
    </section>
  )
}