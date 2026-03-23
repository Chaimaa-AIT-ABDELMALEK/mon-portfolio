type CertificationProps = {
  title: string
  issuer: string
  date: string
}

function CertificationCard({ title, issuer, date }: CertificationProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{issuer}</p>
      <p>{date}</p>
    </div>
  )
}

export default CertificationCard