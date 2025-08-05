import React from 'react';
import { Navigate } from 'react-router-dom';
import { pb } from '../pocketbase';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = pb.authStore.isValid;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute; 