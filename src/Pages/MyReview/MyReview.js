import React, { useContext } from "react";
import { ContextProvide } from "../../Context/AuthContext/AuthContext";

const MyReview = () => {
  const { user } = useContext(ContextProvide);

  return (
    <div>
      <h3>My Review</h3>
    </div>
  );
};

export default MyReview;
