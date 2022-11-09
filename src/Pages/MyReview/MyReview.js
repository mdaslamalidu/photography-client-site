import React, { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../../Context/AuthContext/AuthContext";
import useSetTitle from "../../hook/useSetTitle";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  const { user } = useContext(ContextProvide);
  const [myReview, setMyreview] = useState([]);
  useSetTitle("MyReview");

  useEffect(() => {
    fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photoToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyreview(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDetele = (id) => {
    fetch(`http://localhost:5000/myReview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const filter = myReview.filter((review) => review._id !== id);
          setMyreview(filter);
        }
      });
  };

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
                handleDetele={handleDetele}
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
