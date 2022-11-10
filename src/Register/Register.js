import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvide } from "../Context/AuthContext/AuthContext";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateNameAndUrl } = useContext(ContextProvide);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateNameAndUrl(name, url)
          .then(() => {
            alert("updated");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero">
      <div className="hero-content my-9 w-2/3 mx-auto">
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-8 w-2/3">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-3xl font-bold">Registration!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo URL"
                name="url"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-danger"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center">
            Already Have An Account?{" "}
            <Link className="text-orange-500 font-bold" to="/login">
              Log in
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
