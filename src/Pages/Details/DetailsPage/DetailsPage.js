import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [serviceDetails, SetServiceDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/serviceDetails/${id}`)
      .then((res) => res.json())
      .then((data) => SetServiceDetails(data));
  }, []);

  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 items-center mt-9">
      <div>
        <img src={serviceDetails.img} className="image-full w-full" alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{serviceDetails.name}</h2>
        <p className="font-[400] text-sm">{serviceDetails.desc}</p>
        <p>Price: ${serviceDetails.price}</p>
        <p>
          Rating: {serviceDetails.rating}{" "}
          <span className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
