import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import LatestProjecet from "../LatestProject/LatestProjecet";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <LatestProjecet></LatestProjecet>
    </div>
  );
};

export default Home;
