import { requireComments } from '../services/socket'

function Card({ place, openModal, setCurrentPlace }) {
  const handleClick = () => {
    requireComments(place.title)
    setCurrentPlace(place.title)
    openModal()
  }

  return (
    <div className="card">
      <div className="face front">
        <img src={place.img} alt={place.title} />
        <h3>{place.title}</h3>
      </div>
      <div className="face back">
        <h3>{place.title}</h3>
        {place.description.map((paragraph, i) => (
          <div key={i}>
            <p>{paragraph}</p>
            <br />
          </div>
        ))}
        <div className="link">
          <a
            className="hero__cta"
            href="#"
            data-place={place.title}
            onClick={handleClick}
          >
            COMENTARIOS.
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
