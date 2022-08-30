import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { createPlace } from '../services/places'

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
    })
  }

  return (
    <Modal show={show} closeModal={closeModal}>
      <div className="conteiner_contactame">
        <div className="Comentario">
          <h1>Añadir lugar</h1>
          <div className="comment-container"></div>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label htmlFor="title">Nombre</label>
            <input type="text" name="title" id="title" />
            <p>
              <label htmlFor="description" className="description-label">
                Descripción
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="description"
                className="description"
                id="description"
                required="obligatorio"
                placeholder="Descripción del lugar"
              ></textarea>
            </p>
            <input type="hidden" name="type" value="{{type}}" />

            <label htmlFor="file-upload" className="custom-file-upload">
              <p>Imagen</p>
              <img src="/assets/upload-img.svg" alt="" />
            </label>
            <input
              type="file"
              name="img"
              id="file-upload"
              onChange={handleFileChange}
            />

            <button
              className="modal__close"
              type="submit"
              name="enviar_formulario"
              id="enviar"
              data-type="{{type}}"
            >
              <p>Enviar</p>
            </button>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default ModalAddPlace
