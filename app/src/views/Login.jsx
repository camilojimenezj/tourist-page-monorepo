import { useDispatch } from "react-redux";
import { loginUser } from "../services/login";
import { setUser } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setFlashMessage } = useContext(MessageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email: e.target.email.value,
      password: e.target.password.value,
    })
      .then((res) => {
        localStorage.setItem("loggedTouristAppUser", JSON.stringify(res));
        dispatch(setUser(res));
        setFlashMessage("Successfully logged in");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setFlashMessage("Invalid email or password", "warning");
      });
  };

  return (
    <main>
      <div className="conteiner_login">
        <div className="img_login">
          <img src="assets/login-image.svg" alt="Login-image" />
        </div>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <img src="assets/profile-image.svg" alt="Profile-image" />
            <h2>Bienvenidos</h2>
            <h5>Email</h5>
            <input type="email" className="input" name="email" />

            <h5>Password</h5>
            <input type="password" className="input" name="password" />

            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
