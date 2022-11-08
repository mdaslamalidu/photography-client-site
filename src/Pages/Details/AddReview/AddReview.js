import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextProvide } from "../../../Context/AuthContext/AuthContext";

const AddReview = () => {
  const { user } = useContext(ContextProvide);
  const { id } = useParams();
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const message = form.message.value;
    const email = form.email.value;
    const url = form.url.value;
    const review = {
      name,
      email,
      rating,
      message,
      url,
      id,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <form onSubmit={handlePlaceOrder}>
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full "
          />
          <input
            type="number"
            name="rating"
            placeholder="your rating"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="url"
            placeholder="your image"
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-3"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <input className="btn" type="submit" value="Confirm Your Review" />
      </form>
    </div>
  );
};

export default AddReview;
