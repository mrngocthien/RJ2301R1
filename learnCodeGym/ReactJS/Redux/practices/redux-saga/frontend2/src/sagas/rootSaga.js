import { all } from "redux-saga/effects";
import { watchUserRequested } from "./userSaga";

//call hết các watcher trong các sagas con và nạp vào đây
export function* rootSaga() {
  yield all([
    watchUserRequested()
  ])
}
