import { lazy } from 'react';

export const ArticeDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticeDetailsPage')), 1500);
}));
