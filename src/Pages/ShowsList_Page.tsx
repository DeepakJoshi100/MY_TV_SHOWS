import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { ShowsLoadedAction, ShowsQueryChangeAction } from "../Actions/Shows";
import { searchShows } from "../api";
import { Show } from "../Models/Show";
import SearchBar from "../Components/SearchBar";
import ShowCards from "../Components/ShowCards";
import { showsQuerySelector, showsSelector } from "../Selectors/Shows";
import { State } from "../store";

type ShowsList_PageProps = {
  shows: Show[];
  query: string;
  showsLoaded: (shows: Show[]) => void;
  showsQueryChange: (query: string) => void;
};

const ShowsList_Page: FC<ShowsList_PageProps> = ({
  showsLoaded,
  query,
  shows,
  showsQueryChange,
}) => {
  useEffect(() => {
    searchShows(query).then((shows) => showsLoaded(shows));
  }, [query]);

  return (
    <>
      <div className="mt-2">
        <SearchBar
          value={query}
          onChange={(e) => {
            showsQueryChange(e.target.value);
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

const mapStateToProps = (state: State) => {
  return { query: showsQuerySelector(state), shows: showsSelector(state) };
};

const mapDispatchToProps = {
  showsLoaded: ShowsLoadedAction,
  showsQueryChange: ShowsQueryChangeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList_Page);
