import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollPosRestore = (state: StateSchema) => state.ScrollPosRestore.scroll;
export const getScrollPosRestoreByPath = createSelector(
    getScrollPosRestore,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
