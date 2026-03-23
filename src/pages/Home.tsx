import reactLogo from '../assets/react.svg'

export default function Home() {
  return (
    <section className="page">
      <h1 className="page-title">Mon Portfolio</h1>
      <p className="page-text">
        Étudiante en informatique passionnée par le développement web,
        les applications modernes et la création d’interfaces simples et élégantes.
      </p>

      <img src={reactLogo} alt="React Logo" className="hero-logo" />

      <div className="cards-grid">
        <div className="card">
          <h3>Développement Web</h3>
          <p>
            Création d’interfaces modernes avec React, TypeScript et CSS.
          </p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>
            Réalisation d’API et d’applications avec Java, Spring Boot et MySQL.
          </p>
        </div>

        <div className="card">
          <h3>Objectif</h3>
          <p>
            Développer mes compétences techniques à travers des projets académiques
            et professionnels.
          </p>
        </div>
      </div>
    </section>
  )
}