import { registerUser } from '../services/register'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MessageContext } from '../context/MessageContext'
import styles from '../styles/forms.module.css'

function Register() {
  const navigate = useNavigate()
  const { setFlashMessage } = useContext(MessageContext)

  const setFlashSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
    }
    registerUser(newUser)
      .then((res) => {
        navigate('/login')
        setFlashMessage('Successfully registered')
      })
      .catch((err) => {
        console.error(err)
        setFlashMessage('Email already taken', 'warning')
      })
  }

  return (
    <main>
      <div className={styles.formContainer}>
        <h1>Registrate</h1>
        <form onSubmit={setFlashSubmit}>
          <p>
            <label htmlFor="nombre">
              Nombre
              <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="nombre"
              required="obligatorio"
              placeholder="Escribe tu nombre"
            />
          </p>
          <p>
            <label htmlFor="email">
              Email
              <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required="obligatorio"
              placeholder="Escribe tu Email"
            />
          </p>
          <p>
            <label htmlFor="password">
              Contraseña
              <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Escribe tu teléfono"
            />
          </p>

          <button type="submit" name="enviar_formulario" id="enviar">
            <p>REGISTRATE</p>
          </button>
          <p>
            <span> * Los campos son obligatorios.</span>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Register
