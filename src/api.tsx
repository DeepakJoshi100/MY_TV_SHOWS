import axios from "axios";
import { CAST } from "./Models/Cast";
import { Show } from "./Models/Show";

const BASE_URL = "https://api.tvmaze.com/";

export const searchShows = (keyword: string) => {
  return axios
    .get<{ show: Show }[]>(BASE_URL + "search/shows?q=" + keyword)

    .then((response) => response.data.map((item) => item.show));
};

export const loadShowDetail = (showId: number) => {
  return axios
    .get(BASE_URL + "shows/" + showId)

    .then((response) => response.data);
};

export const castLoad = (showId: number) => {
  return axios
    .get<{ person: CAST }[]>(BASE_URL + "shows/" + showId + "/cast")
    .then((r) => r.data.map((item) => item.person));
};
