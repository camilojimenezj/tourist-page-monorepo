import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-boton">
        <p>
          copyright &copy;2022. todos los derechos reservados
          <span> Camilo Jimenez</span>
        </p>
      </div>
      <div className="footer-contenedor">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </footer>
  );
}

export default Footer;
