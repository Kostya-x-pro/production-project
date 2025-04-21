import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollPosRestoreShema } from '../types/ScrollPosRestoreShema';

const initialState: ScrollPosRestoreShema = {
    scroll: {},
};

export const ScrollPosRestoreSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{path: string, position: number}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: ScrollPosRestoreActions } = ScrollPosRestoreSlice;
export const { reducer: ScrollPosRestoreReducer } = ScrollPosRestoreSlice;
