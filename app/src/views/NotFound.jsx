import { Link } from 'react-router-dom'
import styles from '../styles/notFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <img src="assets/not-found.png" alt="404" className={styles.image} />
      <h2>That page is not here! :(</h2>
      <Link to="/"> Go back to home Page</Link>
    </div>
  )
}

export default NotFound
