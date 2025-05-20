import React, { use } from 'react';
import Spinner from '../components/ui/Spinner';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return <Navigate state={location?.pathname} to='/signin' />
    }
    return children
};

export default PrivateRoutes;