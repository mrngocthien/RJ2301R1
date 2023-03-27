import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

//cal API
async function fetchDeleteUserApi(id) {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.data
}

//TODO: implement worker
function* fetchDeleteUserWorker(action) {
  try {
    const data = yield call(fetchDeleteUserApi, action.payload)
    //TODO: 
    yield put({ type: "FETCH_POST_SINGLE_SUCCESS", data })
  } catch (e) {
    console.error(e)
    yield put({ type: "FETCH_POST_SINGLE_ERROR", error: e })
  }
}

//TODO: Implement watcher
export function* watchDeleteUserRequested() {
    yield takeLatest("FETCH_SINGLE_POST_REQUESTED", fetchDeleteUserWorker)
  
}

