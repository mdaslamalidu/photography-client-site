import React from "react";
import { Link } from "react-router-dom";
import Update from "./Update";

const MyReviewDetails = ({ review, handleDetele }) => {
  const { name, serviceName, url, message, email, _id } = review;
  return (
    <div className="flex items-center w-3/4 mx-auto my-3 p-4 border bg-slate-300 rounded">
      <div className="mr-7">
        <img className="w-24 h-24 rounded-full" src={url} alt="" />
      </div>
      <div>
        <h3 className="text-sm font-bold">
          <span className="text-xl font-bold">ServiceName:</span> {serviceName}
        </h3>
        <h3 className="text-sm font-bold mb-3">
          <span className="text-xl font-bold">MyMessage:</span> {message}
        </h3>

        {/* The button to open modal */}
        {/* Put this part before </body> tag */}

        <label
          onClick={() => handleDetele(_id)}
          className="py-1 px-5 bg-slate-600 rounded text-white hover:bg-slate-500 mr-3 mt-3"
        >
          Delete
        </label>
        <Link to={`/update/${_id}`}>
          <label className="py-1 px-5 bg-slate-600 rounded text-white hover:bg-slate-500 mr-3 mt-3">
            Update
          </label>
        </Link>
      </div>
    </div>
  );
};

export default MyReviewDetails;
