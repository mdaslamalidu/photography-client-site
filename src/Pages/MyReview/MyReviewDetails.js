import React from "react";

const MyReviewDetails = ({ review }) => {
  const { name, serviceName, url, message, email } = review;
  return (
    <div className="flex items-center w-3/4 mx-auto my-3 p-4 border bg-slate-300 rounded">
      <div className="mr-7">
        <img className="w-24 h-24 rounded-full" src={url} alt="" />
      </div>
      <div>
        <h3 className="text-sm font-bold">
          <span className="text-xl font-bold">ServiceName:</span> {serviceName}
        </h3>
        <h3 className="text-sm font-bold">
          <span className="text-xl font-bold">MyMessage:</span> {message}
        </h3>
        <button className="py-px px-5 bg-slate-600 rounded text-white hover:bg-slate-500 mr-3 mt-3">
          Delete
        </button>
        <button className="py-px px-5 bg-slate-600 rounded text-white hover:bg-slate-500 mr-3 mt-3">
          Update
        </button>
      </div>
    </div>
  );
};

export default MyReviewDetails;
