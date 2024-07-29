import { configureStore } from '@reduxjs/toolkit';
import { sagaMiddleware } from './sagaMiddleware';
import swapiSlice from './swapiSlice';
import { rootSaga } from '../saga/rootSaga';

export const store = configureStore({
    reducer: {
        swapi: swapiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
