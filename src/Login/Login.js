import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvide } from "../Context/AuthContext/AuthContext";

const Login = () => {
  const { login } = useContext(ContextProvide);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero">
      <div className="hero-content my-9 w-2/3 mx-auto">
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-8 w-2/3">
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
        </div>
      </div>
    </div>
  );
};

export default Login;