import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          copyright &copy;2022. todos los derechos reservados
          <span> Camilo Jimenez</span>
        </p>
      </div>
      <div className={styles.links}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </footer>
  )
}

export default Footer
