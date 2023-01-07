import { SHOWS_LOADED, SHOWS_QUERY_CHANGE } from "../Actions/Shows";
import { Show } from "../Models/Show";
import produce from "immer";
import { AnyAction } from "redux";
import { normalize, schema } from "normalizr";

export type State = {
  shows: { [showId: number]: Show };
  query: string;
};

export const initialState: State = {
  shows: {},
  query: "",
};

const ShowReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];

        const showSchema = new schema.Entity("shows");
        const normalizedata = normalize(shows, [showSchema]);
        draft.shows = normalizedata.entities.shows || {};
      });

    case SHOWS_QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.query = action.payload;
      });
    default:
      return state;
  }
};

export default ShowReducer;
