import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                />
            ))}
               {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                />
            ))}

        </Routes>
    );
}

export default AppRouter;

