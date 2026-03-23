export default function Education() {
  return (
    <section className="page">
      <h1 className="page-title">Formations</h1>
      <p className="page-text">
        Je poursuis une formation en systèmes informatiques avec un intérêt particulier
        pour le développement logiciel, les applications web et les bases de données.
      </p>

      <div className="cards-grid">
        <div className="card">
          <h3>Licence</h3>
          <p>Licence en Systèmes Informatiques.</p>
        </div>

        <div className="card">
          <h3>Compétences étudiées</h3>
          <p>
            Programmation, conception logicielle, bases de données, réseaux et développement web.
          </p>
        </div>

        <div className="card">
          <h3>Technologies</h3>
          <p>
            Java, React, TypeScript, Spring Boot, MySQL, HTML et CSS.
          </p>
        </div>
      </div>
    </section>
  )
}