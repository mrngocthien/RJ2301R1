import { call, takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'

//TODO: Implement API call
async function fetchUserApi() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  const data = res.data
  return data
}

//TODO: Implement worker
function* fetchUserWorker() {
  try {
    const data = yield call(fetchUserApi)
    yield put({ type: "FETCH_USER_SUCCESS", payload: data })
  } catch (e) {
    yield put({ type: "FETCH_USER_SUCCESS", error: e })
  }
}

//TODO: Implement watcher
export function* watchUserRequested() {
  yield takeLatest("FETCH_USER_REQUESTED", fetchUserWorker)
}

