import React from "react";
import Review from "../Review/Review";
import DetailsPage from "../DetailsPage/DetailsPage";
import AddReview from "../AddReview/AddReview";

const Details = () => {
  return (
    <div>
      <DetailsPage></DetailsPage>
      <Review></Review>
      <AddReview></AddReview>
    </div>
  );
};

export default Details;
