import "../styles/places.css";

function ModalComments({ children, show, closeModal }) {
  const styleShow = show ? "modal--show" : "";
  const handlePropagation = (e) => e.stopPropagation();

  return (
    <section className={`modal ${styleShow}`} onClick={closeModal}>
      <div className="modal__container" onClick={handlePropagation}>
        {children}
      </div>
    </section>
  );
}

export default ModalComments;
