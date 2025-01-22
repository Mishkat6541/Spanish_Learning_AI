import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  return children; // If authenticated, show the children (Dashboard in this case)
};

export default PrivateRoute;
