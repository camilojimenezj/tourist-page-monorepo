import "../styles/places.css";
import Modal from "../components/Modal";
import Comment from "../components/Comment";
import { saveComment } from "../services/socket";
import { useSelector } from "react-redux";

function ModalComments({
  show,
  closeModal,
  comments,
  setComments,
  currentPlace,
}) {
  const state = useSelector((store) => store);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(state.name, e.target.comment.value, currentPlace);
    const newComment = {
      name: state.name,
      comment: e.target.comment.value,
      place: currentPlace,
    };
    setComments((preComments) => [...preComments, newComment]);
    e.target.reset();
  };

  return (
    <Modal show={show} closeModal={closeModal}>
      <div className="conteiner_modal">
        <div className="Comentario">
          <h1>Comentarios</h1>
          <div className="comment-container">
            {comments.map((comment, i) => (
              <Comment comment={comment} key={i} />
            ))}
          </div>
          <form className="comment-form" onSubmit={handleSubmit}>
            <p>
              <label htmlFor="mensaje" className="colocar_mensaje">
                Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="comment"
                className="texto_mensaje"
                id="mensaje"
                required="obligatorio"
                placeholder="Deja aquí tu comentario..."
                data-name="{{name}}"
              ></textarea>
            </p>
            {state ? (
              <div>
                <button
                  className="modal__close"
                  type="submit"
                  name="enviar_formulario"
                  id="enviar"
                >
                  <p>Enviar</p>
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="disabled"
                  name="enviar_formulario"
                  id="enviar"
                  disabled
                >
                  <p>Enviar</p>
                </button>
                <p className="disabled-text">
                  <a href="/login">Ingresa</a> para comentar
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ModalComments;
