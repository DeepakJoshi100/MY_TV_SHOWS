import { combineReducers, createStore } from "redux";
import ShowReducer from "./Reducers/Shows";

const reducer = combineReducers({
  shows: ShowReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
