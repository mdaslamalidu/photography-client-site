import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCart = ({ service }) => {
  const { img, _id, desc, name, price } = service;
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} className="object-cover w-full h-64" alt="" />
              </PhotoView>
            </PhotoProvider>
            <div className="p-5 border border-t-0">
              <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700 inline">
                  Price:
                </p>
                <span className="text-gray-600">$ {price}</span>
              </div>
              <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                {name}
              </p>
              <p className="mb-2 text-gray-700">{desc.slice(0, 99) + "...."}</p>
              <Link
                to={`/services/${_id}`}
                className="inline-flex items-center font-semibold transition-colors duration-200 text-white bg-slate-400 py-1 px-4 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
