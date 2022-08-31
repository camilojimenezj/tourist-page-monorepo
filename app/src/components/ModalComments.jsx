import Modal from '../components/Modal'
import Comment from '../components/Comment'
import { saveComment } from '../services/socket'
import { useSelector } from 'react-redux'
import styles from '../styles/comments.module.css'

function ModalComments({
  show,
  closeModal,
  comments,
  setComments,
  currentPlace,
}) {
  const state = useSelector((store) => store)

  const handleSubmit = (e) => {
    e.preventDefault()
    saveComment(state.name, e.target.comment.value, currentPlace)
    const newComment = {
      name: state.name,
      comment: e.target.comment.value,
      place: currentPlace,
    }
    setComments((preComments) => [...preComments, newComment])
    e.target.reset()
  }

  return (
    <Modal show={show} closeModal={closeModal}>
      <div className={styles.container}>
        <div>
          <h1>Comentarios</h1>
          <div className={styles.commentContainer}>
            {comments.map((comment, i) => (
              <Comment comment={comment} key={i} />
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="mensaje">
                Mensaje
                <span>*</span>
              </label>
              <textarea
                name="comment"
                id="mensaje"
                required="obligatorio"
                placeholder="Deja aquí tu comentario..."
                data-name="{{name}}"
              ></textarea>
            </p>
            {state ? (
              <div>
                <button type="submit" id="enviar">
                  <p>Enviar</p>
                </button>
              </div>
            ) : (
              <div>
                <button className={styles.disabled} id="enviar" disabled>
                  <p>Enviar</p>
                </button>
                <p className={styles.disabledText}>
                  <a href="/login">Ingresa</a> para comentar
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default ModalComments
