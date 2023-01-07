import axios from "axios";
import { Show } from "./Components/Models/Show";

export const searchShows = (keyword: string) => {
  return axios
    .get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
    .then((response) => response.data.map((item) => item.show));
};
