import React, { useEffect, useState } from "react";
import useSetTitle from "../../hook/useSetTitle";
import ServiceCart from "../Home/Services/ServiceCart";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useSetTitle("Services");
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>My Services</h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
