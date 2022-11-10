import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ContextProvide } from "../../../Context/AuthContext/AuthContext";

const Review = () => {
  const { user } = useContext(ContextProvide);
  const [review, setReview] = useState([]);
  const [refress, setRefress] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/review?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [refress]);

  const [serviceDetails, SetServiceDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/serviceDetails/${id}`)
      .then((res) => res.json())
      .then((data) => SetServiceDetails(data));
  }, []);

  const handleAddReview = (event) => {
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
      serviceName: serviceDetails.name,
      date: new Date().getHours(),
    };

    console.log(review);

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setRefress(true);
          toast.success("Thanks For your Review");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-24">
      <h1 className="text-center text-4xl font-bold">My Clients Review</h1>
      <div className="grid grid-cols-1 w-4/5 mx-auto gap-5 my-11">
        {review.map((rev) => {
          return (
            <div className="bg-slate-500 rounded p-4 text-white">
              <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <img
                      src={rev.url}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{rev.name}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">{rev.rating}</span>
                </div>
              </div>
              <hr />
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>Message: {rev.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      {user?.email ? (
        <>
          <div>
            <h2 className="my-5 text-3xl font-bold text-center">
              Add Your Comment
            </h2>
            <div className="w-4/5 mx-auto">
              <form onSubmit={handleAddReview}>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    defaultValue={user?.displayName}
                    readOnly
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
                    defaultValue={user?.email}
                    readOnly
                  />
                  <input
                    type="text"
                    name="url"
                    placeholder="your image"
                    className="input input-bordered w-full"
                    defaultValue={user?.photoURL}
                    readOnly
                  />
                </div>
                <textarea
                  className="textarea textarea-bordered w-full my-3"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
                <input
                  className="btn"
                  type="submit"
                  value="Confirm Your Review"
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-3xl text-center font-bold">
          Please Login to add Your Review, Go to{" "}
          <button className="bg-slate-500 text-white rounded text-2xl py-0 px-5 mr-3">
            <Link to="/login">Log In</Link>{" "}
          </button>
          page
        </h2>
      )}
    </div>
  );
};

export default Review;
