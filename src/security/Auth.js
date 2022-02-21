import { createContext, useState, useContext } from "react";
import { fakeSignIn, fakeSignOut } from "./FakeAuthProvider";
import { Navigate, useLocation  } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = async (newUser = "") => {
    return fakeSignIn().then(() => {
      setUser(newUser);
    });
  }

  let signout = async () => {
    return fakeSignOut().then(() => {
      setUser(null);
    });
  }

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}