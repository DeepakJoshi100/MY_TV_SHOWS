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

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

export const ShowLoadedAction: ActionCreater<Show> = (show: Show) => ({
  type: SHOW_DETAIL_LOADED,
  payload: show,
});

export const LOAD_SHOW_ACTION = "LOAD_SHOW_ACTION";

export const LoadShowAction: ActionCreater<number> = (showId: number) => ({
  type: LOAD_SHOW_ACTION,
  payload: showId,
});
