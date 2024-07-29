import { takeEvery } from 'redux-saga/effects';
import { swapiAsyncActions } from './swapiAsyncActions';
import { callGetSwapiDataWorker, callClearSwapiDataWorker } from './swapiWorkers';

export function* swapiWatcher() {
    yield takeEvery(swapiAsyncActions.getSwapiDataAsync.type, callGetSwapiDataWorker);
    yield takeEvery(swapiAsyncActions.clearSwapiDataAsync.type, callClearSwapiDataWorker);
}
