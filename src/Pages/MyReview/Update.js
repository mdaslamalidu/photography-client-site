import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const review = useLoaderData();
  const { name, url, rating, email, message, id, serviceName, _id } = review;

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const url = form.url.value;
    const rating = form.rating.value;
    const review = {
      name,
      email,
      rating,
      message,
      url,
      id,
      serviceName,
    };
    console.log(review);

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="w-4/5 mx-auto mt-12">
        <form onSubmit={handleUpdateReview}>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full "
              defaultValue={name}
            />
            <input
              type="number"
              name="rating"
              placeholder="your rating"
              className="input input-bordered w-full "
              defaultValue={rating}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
              defaultValue={email}
              readOnly
            />
            <input
              type="text"
              name="url"
              placeholder="your image"
              className="input input-bordered w-full "
              defaultValue={url}
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full my-3"
            name="message"
            placeholder="Your Message"
            defaultValue={message}
          ></textarea>
          <input className="btn" type="submit" value="Confirm Your Review" />
        </form>
      </div>
    </div>
  );
};

export default Update;
