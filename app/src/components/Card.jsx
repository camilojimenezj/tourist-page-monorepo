import { requireComments } from '../services/socket'
import styles from '../styles/card.module.css'

function Card({ place, openModal, setCurrentPlace }) {
  const handleClick = (e) => {
    e.preventDefault()
    requireComments(place.title)
    setCurrentPlace(place.title)
    openModal()
  }

  return (
    <div className={styles.card}>
      <section className={styles.front}>
        <img src={place.img} alt={place.title} />
        <h3>{place.title}</h3>
      </section>
      <section className={styles.back}>
        <h3>{place.title}</h3>
        {place.description.map((paragraph, i) => (
          <div key={i}>
            <p>{paragraph}</p>
            <br />
          </div>
        ))}
        <div className={styles.link}>
          <a
            className="hero__cta"
            href="#"
            data-place={place.title}
            onClick={handleClick}
          >
            COMENTARIOS.
          </a>
        </div>
      </section>
    </div>
  )
}

export default Card
