import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route) => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                    />
                ))}
                <Route path="*" element={<Navigate to="/posts" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                    />
                ))}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>

    );
}

export default AppRouter;

