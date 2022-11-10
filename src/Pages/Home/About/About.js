import React from "react";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row w-5/6 mx-auto gap-6 my-24">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-justify my-4">
          Every photo can be described as a combination of each of these terms.
          It allows instructors to be concrete in aspects they want to refine,
          so instead of idiosyncratically describing a photo as “good” or “bad”,
          they can say “it’s beautiful, but very obvious, maybe too obvious, and
          too formal a composition — try a more relaxed composition and maybe
          make it a little more “moment” and a little less “thing.” That’s a
          very different way to help a student explore picture taking.
        </p>
        <div className="flex justify-left items-center gap-4">
          <div className="rounded bg-slate-400 text-white p-1">
            <h1 className="text-4xl font-bold">100+</h1>
            <h1>Subscriptions</h1>
          </div>
          <div className="rounded bg-slate-400 text-white p-1">
            <h1 className="text-4xl font-bold">500+</h1>
            <h1>Happy Clients</h1>
          </div>
          <div className="rounded bg-slate-400 text-white p-1">
            <h1 className="text-4xl font-bold">5+</h1>
            <h1>Experience</h1>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full h-full rounded"
          src="https://image.shutterstock.com/image-photo/camera-on-background-blurry-city-260nw-773226046.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
