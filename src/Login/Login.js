import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextProvide } from "../Context/AuthContext/AuthContext";
import useSetTitle from "../hook/useSetTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  // const { login } = useContext(ContextProvide);
  // useSetTitle("login");
  // const location = useLocation();
  // const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   login(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       const currentUser = {
  //         email: user.email,
  //       };

  //       // jwt token
  //       fetch("https://photography-server-murex.vercel.app/jwt", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(currentUser),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           localStorage.setItem("photoToken", data.token);
  //           navigate(from, { replace: true });
  //         });
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    <div className="hero">
      <h2>Hello</h2>
      {/* <div className="hero-content my-9 w-full md:w-2/3 mx-auto">
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-8  w-full md:w-2/3">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-danger" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Genius?{" "}
            <Link className="text-orange-500 font-bold" to="/register">
              Register
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
