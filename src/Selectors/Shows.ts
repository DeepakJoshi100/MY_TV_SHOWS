import { createSelector } from "reselect";
import { State } from "../store";

export const showsStateSelector = (state: State) => {
  return state.shows;
};

export const showsQuerySelector = createSelector(
  showsStateSelector,
  (showState) => showState.query
);

export const showsMapSelector = createSelector(
  showsStateSelector,
  (showState) => showState.shows
);

export const showsSelector = createSelector(showsMapSelector, (showsMap) =>
  Object.keys(showsMap).map((showId) => showsMap[+showId])
);
