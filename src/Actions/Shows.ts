import { ActionCreater } from ".";
import { Show } from "../Models/Show";

export const SHOWS_LOADED = "SHOWS_LOADED";

export const ShowsLoadedAction: ActionCreater<Show[]> = (shows: Show[]) => ({
  type: SHOWS_LOADED,
  payload: shows,
});

export const SHOWS_QUERY_CHANGE = "SHOWS_QUERY_CHANGE";

export const ShowsQueryChangeAction: ActionCreater<string> = (
  query: string
) => ({
  type: SHOWS_QUERY_CHANGE,
  payload: query,
});
