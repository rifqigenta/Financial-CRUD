import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

const PrivateRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
