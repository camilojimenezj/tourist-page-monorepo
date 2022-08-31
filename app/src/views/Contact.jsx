import styles from '../styles/forms.module.css'

function Contact() {
  return (
    <main>
      <div className={styles.formContainer}>
        <h1>Formulario de contacto</h1>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
        <form action="#" method="post">
          <p>
            <label htmlFor="nombre" className="colocar_nombre">
              Nombre
              <span>*</span>
            </label>
            <input
              type="text"
              name="introducir_nombre"
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
              name="introducir_email"
              id="email"
              required="obligatorio"
              placeholder="Escribe tu Email"
            />
          </p>
          <p>
            <label htmlFor="telefone">Teléfono</label>
            <input
              type="tel"
              name="introducir_telefono"
              id="telefono"
              placeholder="Escribe tu teléfono"
            />
          </p>
          <p>
            <label htmlFor="destino">
              destino
              <span>*</span>
            </label>
            <input
              type="text"
              name="introducir_asunto"
              id="assunto"
              required="obligatorio"
              placeholder="Escribe un destino"
            />
          </p>
          <p>
            <label htmlFor="mensaje">
              Mensaje
              <span>*</span>
            </label>
            <textarea
              name="introducir_mensaje"
              className="texto_mensaje"
              id="mensaje"
              required="obligatorio"
              placeholder="Deja aquí tu comentario..."
            ></textarea>
          </p>
          <button type="submit" name="enviar_formulario" id="enviar">
            <p>Enviar</p>
          </button>
          <p>
            <span> * Los campos son obligatorios.</span>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Contact
