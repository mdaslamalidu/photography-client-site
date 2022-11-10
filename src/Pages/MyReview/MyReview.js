import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContextProvide } from "../../Context/AuthContext/AuthContext";
import useSetTitle from "../../hook/useSetTitle";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  const { user, logout } = useContext(ContextProvide);
  const [myReview, setMyreview] = useState([]);
  useSetTitle("MyReview");

  useEffect(() => {
    fetch(
      `https://photography-server-murex.vercel.app/myReview?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("photoToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setMyreview(data.reverse());
      })
      .catch((err) => console.error(err));
  }, [user?.email, logout]);

  const handleDetele = (id) => {
    fetch(`https://photography-server-murex.vercel.app/myReview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const filter = myReview.filter((review) => review._id !== id);
          setMyreview(filter);
          toast.success("Successfully Delete");
        }
      });
  };

  return (
    <div className="h-auto">
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
    </div>
  );
};

export default MyReview;
