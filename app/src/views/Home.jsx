import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'

function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.home}>
          <h1>Explorar tu alredor</h1>
          <p>
            Senderos y Rutas en su maxima expresición busca crear un espacio
            para salir de lo habitual y disfrutar del poder revitalizante de la
            naturaleza. Para distrutar de una ruta de montana, un viaje de
            aventura o una caminata de senderismo todo lo que necesitas son
            ganas de explorar.
          </p>
          <div className={styles.button}>
            <Link to="/paths">Senderos</Link>
            <Link to="/routes">Rutas</Link>
          </div>
        </div>
        <div className={styles.image}>
          <img src="assets/home-image.svg" alt="Home-image" />
        </div>
      </div>
    </main>
  )
}

export default Home
