import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { ShowsQueryChangeAction } from "../Actions/Shows";
import { Show } from "../Models/Show";
import SearchBar from "../Components/SearchBar";
import ShowCards from "../Components/ShowCards";
import { showsQuerySelector, showsSelector } from "../Selectors/Shows";
import { State } from "../store";

type ShowsList_PageProps = {
  shows: Show[];
  query: string;
  queryChange: (query: string) => void;
};

const ShowsList_Page: FC<ShowsList_PageProps> = ({
  query,
  shows,
  queryChange,
}) => {
  return (
    <>
      <div className="mt-2">
        <SearchBar
          value={query}
          onChange={(e) => {
            queryChange(e.target.value);
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
  queryChange: ShowsQueryChangeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList_Page);
