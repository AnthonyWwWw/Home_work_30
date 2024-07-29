import { put, call, delay } from 'redux-saga/effects';
import { swapiSlice } from '../redux/swapiSlice'; 

export function* callGetSwapiDataWorker(action) {
    const URL = `https://swapi.dev/api/${action.payload.text}`;
    if (URL) {
        try {
            yield put(swapiSlice.actions.setLoader(true));
            const response = yield call(fetch, URL);
            const data = yield call([response, 'json']);
            if (response.status === 200) {
                yield put(swapiSlice.actions.setAction(action.payload.text));
                yield put(swapiSlice.actions.setData(data));
                yield delay(2000);
                yield put(swapiSlice.actions.setLoader(false));
            } else {
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            yield delay(2000);
            yield put(swapiSlice.actions.setAction(false));
            yield put(swapiSlice.actions.setLoader(false));
            const upData = undefined;
            yield put(swapiSlice.actions.clearData(upData));
        }
    }
}

export function* callClearSwapiDataWorker() {
    const upData = undefined;
    yield put(swapiSlice.actions.clearData(upData));
}
