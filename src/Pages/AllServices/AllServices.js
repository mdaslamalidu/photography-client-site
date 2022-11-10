import React, { useContext, useEffect, useState } from "react";
import useSetTitle from "../../hook/useSetTitle";
import ServiceCart from "../Home/Services/ServiceCart";
import Spinner from "../Spinner/Spinner";

const AllServices = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  useSetTitle("Services");
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(loading);
        setLoading(true);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(loading);

  return (
    <div className="bg-slate-100 py-10">
      {loading ? (
        <>
          <h2 className="text-center text-3xl font-bold mt-4">My Services</h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {services.map((service) => (
              <ServiceCart key={service._id} service={service}></ServiceCart>
            ))}
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default AllServices;
