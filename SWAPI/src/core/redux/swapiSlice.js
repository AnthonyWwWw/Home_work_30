import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loader: false,
    data: undefined,
    action: false,
};

export const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setAction: (state, action) => {
            state.action = action.payload;
        },
        clearData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export default swapiSlice;
