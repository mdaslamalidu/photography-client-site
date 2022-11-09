import React from "react";
import useSetTitle from "../../hook/useSetTitle";

const AddServices = () => {
    useSetTitle("AddServices")
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const desc = form.desc.value;
    const img = form.url.value;

    const services = {
      img,
      name,
      rating,
      desc,
      price,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="w-4/5 mx-auto mt-24">
        <h1 className="text-center mb-5 text-4xl font-bold">
          Add Your Service
        </h1>
        <form onSubmit={handleAddService}>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="url"
              placeholder="image Url"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              name="rating"
              placeholder="rating"
              className="input input-bordered w-full "
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full my-3"
            name="desc"
            placeholder="Service Description"
          ></textarea>
          <input className="btn" type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
