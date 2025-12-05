import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../Firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const AuthenticateUser = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
  }, []);

  return <>{children}</>;
};

export default AuthenticateUser;
