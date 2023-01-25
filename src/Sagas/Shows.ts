import {
  CastLoaderAction,
  ShowLoadedAction,
  ShowsLoadedAction,
} from "./../Actions/Shows";
import { Action } from "./../Actions/index";
import { castLoad, loadShowDetail, searchShows } from "./../api";
import { call, put } from "redux-saga/effects";

export function* fetchShows(action: Action): Generator<any, any, any> {
  const shows = yield call(searchShows, action.payload);
  yield put(ShowsLoadedAction(shows));
}

export function* fetchShowDetail(action: Action): Generator<any, any, any> {
  const show = yield call(loadShowDetail, action.payload);
  yield put(ShowLoadedAction(show));
}

export function* fetchCastDetail(action: Action): Generator<any, any, any> {
  const cast = yield call(castLoad, action.payload);
  console.log("action.payload", action.payload);
  yield put(CastLoaderAction(cast));
}
