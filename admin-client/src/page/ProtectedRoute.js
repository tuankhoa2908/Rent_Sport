import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.user);
    console.log(isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />; // Render nested routes
};

export default ProtectedRoute;
