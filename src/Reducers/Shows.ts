import { SHOW_DETAIL_LOADED } from "./../Actions/Shows";
import { SHOWS_LOADED, SHOWS_QUERY_CHANGE } from "../Actions/Shows";
import { Show } from "../Models/Show";
import produce from "immer";
import { AnyAction } from "redux";
import { normalize, schema } from "normalizr";

export type State = {
  shows: { [showId: number]: Show };
  query_shows: { [query: string]: number[] };
  query: string;
  showLoading: { [showId: number]: boolean };
  loading: boolean;
};

export const initialState: State = {
  shows: {},
  query_shows: {},
  query: "",
  showLoading: {},
  loading: false,
};

const ShowReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];
        if (!shows || shows.length === 0) {
          return;
        }

        const showSchema = new schema.Entity("shows");

        const normalizedata = normalize(shows, [showSchema]);

        draft.loading = false;

        draft.query_shows[draft.query] = normalizedata.result;

        draft.shows = { ...draft.shows, ...normalizedata.entities.shows };
      });

    case SHOWS_QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.query = action.payload;
        {
          draft.query && (draft.loading = true);
        }
      });

    case SHOW_DETAIL_LOADED:
      return produce(state, (draft) => {
        const show = action.payload as Show;
        draft.shows[show.id] = show;
      });
    default:
      return state;
  }
};

export default ShowReducer;
