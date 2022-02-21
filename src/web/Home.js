import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../security/Auth";

export default function Home() {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <div>Welcome {auth.user} ! { " " }</div>
      <button onClick={() => {
        auth.signout().then(() => navigate("/", { replace: true }));
        // auth.signout().then(console.log(auth.user));
      }}>登出</button>
      <Link to="/info">
        <button>Info</button>
      </Link>
    </>
  );
}