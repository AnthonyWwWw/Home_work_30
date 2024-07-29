import { createAction } from '@reduxjs/toolkit';

export const swapiAsyncActions = Object.freeze({
    getSwapiDataAsync: createAction('GET_SWAPI_DATA'),
    clearSwapiDataAsync: createAction('CLEAR_SWAPI_DATA'),
});
