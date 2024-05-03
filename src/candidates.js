// candidates.js (Example of a saga file)
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CANDIDATES_REQUEST, FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_FAILURE } from './actions';

function* fetchCandidates() {
  try {
    const response = yield call(fetch, 'https://api.weekday.technology/adhoc/getSampleJdJSON', {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        // Add any additional headers if required
      },
      // Optionally, include a request body if needed
      body: JSON.stringify({ /* your request body here */ })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = yield response.json();
    yield put({ type: FETCH_CANDIDATES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_CANDIDATES_FAILURE, error: error.message });
  }
}


export function* watchFetchCandidates() {
  yield takeEvery(FETCH_CANDIDATES_REQUEST, fetchCandidates);
}
