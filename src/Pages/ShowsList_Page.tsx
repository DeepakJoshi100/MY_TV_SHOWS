import { FC, useEffect, useState } from "react";
import { searchShows } from "../api";
import { Show } from "../Components/Models/Show";
import SearchBar from "../Components/SearchBar";
import ShowCards from "../Components/ShowCards";

type ShowsList_PageProps = {};

const ShowsList_Page: FC<ShowsList_PageProps> = (props) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchShows(query).then((shows) => setShows(shows));
  }, [query]);

  return (
    <>
      <div className="mt-2">
        <SearchBar
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <div className="flex flex-wrap justify-center">
          {shows.map((s) => (
            <ShowCards key={s.id} show={s}></ShowCards>
          ))}
        </div>
      </div>
    </>
  );
};

ShowsList_Page.defaultProps = {};

export default ShowsList_Page;
