export default function Experience() {
  return (
    <section className="page">
      <h1 className="page-title">Parcours</h1>
      <p className="page-text">
        Mon parcours comprend des projets académiques, des travaux pratiques
        et une montée en compétence continue en développement web et backend.
      </p>

      <div className="cards-grid">
        <div className="card">
          <h3>Projets académiques</h3>
          <p>
            Réalisation d’applications en Java, React, Spring Boot et bases de données.
          </p>
        </div>

        <div className="card">
          <h3>Travaux pratiques</h3>
          <p>
            Mise en œuvre de concepts en algorithmique, programmation orientée objet et web.
          </p>
        </div>

        <div className="card">
          <h3>Apprentissage continu</h3>
          <p>
            Amélioration régulière de mes compétences techniques et de ma méthodologie.
          </p>
        </div>
      </div>
    </section>
  )
}