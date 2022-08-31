import styles from '../styles/modal.module.css'

function ModalComments({ children, show, closeModal }) {
  const styleShow = show ? 'modalShow' : ''
  const handlePropagation = (e) => e.stopPropagation()

  return (
    <section
      className={`${styles.modal} ${styles[styleShow]}`}
      onClick={closeModal}
    >
      <div className={styles.modalContainer} onClick={handlePropagation}>
        {children}
      </div>
    </section>
  )
}

export default ModalComments
