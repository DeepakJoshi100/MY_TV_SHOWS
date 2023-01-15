import { LOAD_SHOW_ACTION, SHOWS_QUERY_CHANGE } from "./Actions/Shows";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ShowReducer from "./Reducers/Shows";
import { fetchShowDetail, fetchShows } from "./Sagas/Shows";
import { debounce, takeEvery } from "redux-saga/effects";

const reducer = combineReducers({
  shows: ShowReducer,
});

function* rootSaga() {
  yield debounce(200, SHOWS_QUERY_CHANGE, fetchShows);
  yield takeEvery(LOAD_SHOW_ACTION, fetchShowDetail);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof reducer>;

export default store;

// create store

// reducer

// action

// mapDispatchToprops {must define where the data is}

// ------Test 1-------- {right action with right data}

// switch statements to reducer

// -----Test2-------

// selectors {first selector own with out selectors}

// mapStateToProps

// ------Test3--------
