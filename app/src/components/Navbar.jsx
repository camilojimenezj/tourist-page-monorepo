import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../reducers/userReducer'
import styles from '../styles/navbar.module.css'
import Hamburger from './Hamburger'
import handleHam from '../utils/hamburger'

function Navbar() {
  const state = useSelector((store) => store)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    window.localStorage.removeItem('loggedTouristAppUser')
    dispatch(removeUser())
    navigate('/login')
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="assets/logo.jpg" alt="logo" onClick={() => navigate('/')} />
      </div>
      <ul className="menu">
        <li onClick={handleHam}>
          <Link to="/">
            <p>Inicio</p>
          </Link>
        </li>
        <li onClick={handleHam}>
          <Link to="/about">
            <p>Acerca de</p>
          </Link>
        </li>
        <li onClick={handleHam}>
          <Link to="/contact">
            <p>Contactame</p>
          </Link>
        </li>
        {state ? (
          <li onClick={handleHam}>
            <a href="#" onClick={handleLogout}>
              <p>Logout</p>
            </a>
          </li>
        ) : (
          <li onClick={handleHam}>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </li>
        )}
        <li onClick={handleHam}>
          <Link to="/register">
            <p>Registrate</p>
          </Link>
        </li>
      </ul>
      <Hamburger />
    </nav>
  )
}

export default Navbar
