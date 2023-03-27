import { call, takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'
import { ACTION_TYPES } from '../constants/actionTypes';

const BaseURL = "https://jsonplaceholder.typicode.com/users";
//TODO: Implement API call
async function fetchUserApi() {
  const res = await axios.get(BaseURL)
  const data = res.data
  return data
}

//TODO: Implement worker
function* fetchUserWorker() {
  try {
    const data = yield call(fetchUserApi)
    yield put({ type: ACTION_TYPES.FETCH_USER_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: ACTION_TYPES.FETCH_USER_SUCCESS, error: e })
  }
}

function* authSagaFun(action) {
  const user = action.payload;
  if (user.username === "admin" && user.password === "letmein") {
      yield put({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: user });
      yield put({ type: ACTION_TYPES.FETCH_USER_REQUESTED, payload: {} });
  }
}

//TODO: Implement watcher
export function* watchUserRequested() {
  yield takeLatest(ACTION_TYPES.LOGIN, authSagaFun);
  yield takeLatest(ACTION_TYPES.FETCH_USER_REQUESTED, fetchUserWorker)
}

