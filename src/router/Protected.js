import React from "react";
import { Navigate } from "react-router-dom";
// import Storage from "";
import GetStorage from "../services/storage"
const ProtectedRoutes = ({ children }) => {
  const user = GetStorage.get("xAuthToken");
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoutes;
