import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { createPlace } from '../services/places'
import styles from '../styles/forms.module.css'

function ModalAddPlace({ show, closeModal, type, setPlaces }) {
  const user = useSelector((store) => store)
  const [file, setFile] = useState()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('title', e.target.title.value)
    formdata.append('description', e.target.description.value)
    formdata.append('type', type)
    formdata.append('img', file)
    createPlace(formdata, user.token).then((res) => {
      setPlaces((prevPlaces) => [...prevPlaces, res])
      closeModal()
      e.target.reset()
    })
  }

  return (
    <Modal show={show} closeModal={closeModal}>
      <div className={styles.formContainer}>
        <h1>Añadir lugar</h1>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <label htmlFor="title">Nombre</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Nombre del lugar"
          />
          <p>
            <label htmlFor="description">
              Descripción
              <span>*</span>
            </label>
            <textarea
              name="description"
              id="description"
              required="obligatorio"
              placeholder="Descripción del lugar"
            ></textarea>
          </p>
          <input type="hidden" name="type" value="{{type}}" />
          <div className={styles.file}>
            <label htmlFor="file-upload">
              <p>Imagen</p>
              <img src="/assets/upload-img.svg" alt="" />
            </label>
            <input
              type="file"
              name="img"
              id="file-upload"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" name="enviar_formulario" id="enviar">
            <p>Enviar</p>
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default ModalAddPlace
