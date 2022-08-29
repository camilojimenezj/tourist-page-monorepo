import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../reducers/userReducer'
import '../styles/navbar.css'

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
    <nav>
      <div className="logo">
        <img src="assets/logo.jpg" alt="logo" onClick={() => navigate('/')} />
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contactame</Link>
        </li>
        {state ? (
          <li>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/register">Registrate</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
