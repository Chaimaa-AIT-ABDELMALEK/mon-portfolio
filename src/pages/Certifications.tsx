import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section className="page">
      <h1 className="page-title">Certifications</h1>

      <div className="cards-grid">
        {certifications.map((cert, index) => (
          <div className="card" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}