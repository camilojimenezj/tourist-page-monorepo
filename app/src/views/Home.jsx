import { Link } from "react-router-dom";
import "../styles/views.css";

function Home() {
  return (
    <main>
      <div className="conteiner">
        <div className="home">
          <h1>Explorar tu alredor</h1>
          <p>
            Senderos y Rutas en su maxima expresición busca crear un espacio
            para salir de lo habitual y disfrutar del poder revitalizante de la
            naturaleza. Para distrutar de una ruta de montana, un viaje de
            aventura o una caminata de senderismo todo lo que necesitas son
            ganas de explorar.
          </p>
          <div className="botton">
            <Link className="boton" to="/paths">
              Senderos
            </Link>
            <Link className="boton" to="/routes">
              Rutas
            </Link>
          </div>
        </div>
        <div className="homepanal">
          <img src="assets/home-image.svg" alt="Home-image" />
        </div>
      </div>
    </main>
  );
}

export default Home;
