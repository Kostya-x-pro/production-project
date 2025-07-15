import { Route, Routes } from 'react-router-dom';
import {
    memo, Suspense, useCallback,
} from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { routeConfig } from './config/routeConfig';
import { AppRouteProps } from '@/shared/types/router';

import { RequireAuth } from './RequiredAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (

        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>

    );
});
