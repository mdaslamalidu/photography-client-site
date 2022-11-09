import React, { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../../Context/AuthContext/AuthContext";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  const { user } = useContext(ContextProvide);
  const [myReview, setMyreview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {myReview.length ? (
        <>
          <h3 className="text-center mt-8 text-4xl font-bold">
            My Review : {myReview.length}
          </h3>
          <div className="grid grid-cols-1">
            {myReview.map((review) => (
              <MyReviewDetails
                key={review._id}
                review={review}
              ></MyReviewDetails>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-center mt-8 text-4xl font-bold">
          There is no review for you
        </h2>
      )}
    </div>
  );
};

export default MyReview;
