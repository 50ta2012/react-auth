import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../security/Auth";



export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);
  console.log(auth.user);
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value
    auth.signin(username).then(() => {
      // console.log(auth.username);
      navigate(from , { replace: true });
    });
  }

  return (
    <>
      <h1>這是登入頁面</h1>
      <form>
        <label>
          Username: <input id="username" type="text" />
        </label>{" "}
        <button onClick={handleSubmit}>登入</button>
      </form>
    </>
  );
}