import React from "react";

const Update = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto mt-12">
        <form>
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
    </div>
  );
};

export default Update;
