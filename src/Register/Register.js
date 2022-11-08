import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        </div>
      </div>
    </div>
  );
};

export default Register;
