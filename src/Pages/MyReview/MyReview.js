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
      <h3>My Review : {myReview.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <button>Delete</button>
                </label>
              </th>
              <th>UserName</th>
              <th>ServiceName</th>
              <th>Message</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((review) => (
              <MyReviewDetails
                review={review}
                key={review._id}
              ></MyReviewDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
