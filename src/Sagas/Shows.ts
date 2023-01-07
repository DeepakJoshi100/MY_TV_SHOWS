import { ShowsLoadedAction } from "./../Actions/Shows";
import { Action } from "./../Actions/index";
import { searchShows } from "./../api";
import { call, put } from "redux-saga/effects";

export function* fetchShows(action: Action): Generator<any, any, any> {
  const shows = yield call(searchShows, action.payload);
  yield put(ShowsLoadedAction(shows));
}
