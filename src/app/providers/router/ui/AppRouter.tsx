import { Route, Routes } from 'react-router-dom';
import {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRouteProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';

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
