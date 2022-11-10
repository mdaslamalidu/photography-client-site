import React from "react";
import { Link } from "react-router-dom";

const LatestProjecet = () => {
  return (
    <div className="bg-slate-100 py-10">
      <div>
        <h2 className="text-center text-3xl font-bold">
          My Latest Photo Collection
        </h2>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://cdn3.dpmag.com/2019/10/shutterstock_1239834655.jpg"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOXetEQbp__e4SJic-ALbYlvdfXWeFoMCwQ&usqp=CAU"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEiicRkAOIsA3vUnuJMCl2yHWR02dHtSMCQ&usqp=CAU"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uNs3G450sqCqWCVEGNBsFScnGrYMSxMdmw&usqp=CAU"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAk_lGj3kokH3skvXtOORE5kOzt-3MME6iVl_zqpZsAzmN-Lk4SGNjM4TGjwjUqsY_gU&usqp=CAU"
            />
          </div>
        </section>
        <Link to="/services" className="flex justify-center">
          <button className="btn">See All Project</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProjecet;
