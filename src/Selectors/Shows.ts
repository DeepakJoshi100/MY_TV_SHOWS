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

export const castMapSelectors = createSelector(
  showsStateSelector,
  (showState) => showState.cast
);

export const queryShowsMapSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.query_shows
);

export const showsLoadingSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.loading
);

export const showsSelector = createSelector(
  showsMapSelector,
  showsQuerySelector,
  queryShowsMapSelector,
  (showsMap, query, queryShowsMap) =>
    queryShowsMap[query]?.map((showId) => showsMap[showId])
);
