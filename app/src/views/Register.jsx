import { registerUser } from '../services/register'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MessageContext } from '../context/MessageContext'
import '../styles/forms.css'

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
      <div className="form-container">
        <div className="Registrate">
          <h1>Registrate</h1>
          <form onSubmit={setFlashSubmit}>
            <p>
              <label htmlFor="nombre" className="colocar_nombre">
                Nombre
                <span className="obligatorio">*</span>
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
              <label htmlFor="email" className="colocar_email">
                Email
                <span className="obligatorio">*</span>
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
              <label htmlFor="password" className="colocar_telefono">
                Contraseña
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
            <p className="aviso">
              <span className="obligatorio"> * </span>Los campos son
              obligatorios.
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register
