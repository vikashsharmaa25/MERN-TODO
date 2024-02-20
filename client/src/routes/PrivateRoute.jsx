import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const { id } = props;
  return id ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
