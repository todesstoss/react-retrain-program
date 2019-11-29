import { call, takeEvery, put } from 'redux-saga/effects';
import { api } from '../services';
import { fetchMoviesSuccess } from '../actions';

function* fetchMoviesStartWorker({ payload: { url } }) {
  const data = yield call(api.get, url);
  yield put(fetchMoviesSuccess(data));
}

export default function* rootSaga() {
  yield takeEvery('FETCH_MOVIES_WITH_SAGAS', fetchMoviesStartWorker);
}
