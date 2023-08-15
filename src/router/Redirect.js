import React from "react";
import { Navigate } from "react-router-dom";
import GetStorage from "../services/storage";

const Redirect = ({ children }) => {
  const user = GetStorage.get("xAuthToken");
  if (user) {
    return <Navigate to="/lobby" replace />;
  }
  return children;
};
export default Redirect;
