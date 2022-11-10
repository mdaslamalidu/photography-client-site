import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextProvide } from "../Context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { googleSignIn } = useContext(ContextProvide);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSingin = () => {
    googleSignIn()
      .then((resutl) => {
        const user = resutl.user;
        console.log(user);
        const currentUser = {
          email: user?.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("photoToken", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center mt-3">
      <button onClick={handleGoogleSingin} className="btn ">
        google
      </button>
    </div>
  );
};

export default SocialLogin;
