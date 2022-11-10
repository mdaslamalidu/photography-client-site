import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvide } from "../Context/AuthContext/AuthContext";
import Spinner from "../Pages/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ContextProvide);
  const location = useLocation();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
