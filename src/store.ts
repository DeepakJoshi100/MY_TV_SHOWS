import { SHOWS_QUERY_CHANGE } from "./Actions/Shows";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ShowReducer from "./Reducers/Shows";
import { fetchShows } from "./Sagas/Shows";
import { takeEvery, takeLatest } from "redux-saga/effects";

const reducer = combineReducers({
  shows: ShowReducer,
});

function* rootSaga() {
  yield takeLatest(SHOWS_QUERY_CHANGE, fetchShows);
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
