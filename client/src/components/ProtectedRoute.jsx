import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../utils/auth";

const ProtectedRoute = ({ element: Element, isAdminRoute, ...rest }) => {
  const isAuth = isAuthenticated();

  return (
    // <Route
    //   {...rest}
    //   element={
    //     isAuthenticated() ? (
    //       isAdminRoute ? (
    //         isAdmin() ? (
    //           <Element />
    //         ) : (
    //           <Navigate to="/user-dashboard" replace />
    //         )
    //       ) : (
    //         <Element />
    //       )
    //     ) : (
    //       <Navigate to="/login" replace />
    //     )
    //   }
    // />
    <>
      {
        idAuth
      }
    </>
  );
};

export default ProtectedRoute;
