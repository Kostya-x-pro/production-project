import { lazy } from 'react';

export const ForbidenPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ForbidenPage')), 1500);
}));
