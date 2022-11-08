import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
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
      <Link to="/services">
        <button>See All</button>
      </Link>
    </div>
  );
};

export default Services;
