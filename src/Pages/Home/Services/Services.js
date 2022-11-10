import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://photography-server-murex.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-slate-100 py-10">
      <h2 className="text-center text-3xl font-bold mt-4">My Services</h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
      <Link to="/services" className="flex justify-center">
        <button className="btn">See All</button>
      </Link>
    </div>
  );
};

export default Services;
