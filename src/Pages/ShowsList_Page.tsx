import { FC, useEffect } from "react";
import { connect, ConnectedProps, ConnectProps } from "react-redux";
import { ShowsQueryChangeAction } from "../Actions/Shows";
import SearchBar from "../Components/SearchBar";
import ShowCards from "../Components/ShowCards";
import {
  showsLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../Selectors/Shows";
import { State } from "../store";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowsList_PageProps = ReduxProps;

const ShowsList_Page: FC<ShowsList_PageProps> = ({
  query,
  shows,
  queryChange,
  loading,
}) => {
  console.log("shows", shows);
  return (
    <>
      <div className="mt-2">
        <div className="flex flex-col w-full">
          <SearchBar
            value={query}
            onChange={(e) => {
              queryChange(e.target.value);
            }}
          />
          {loading && <LoadingSpinner />}
        </div>
        {shows && (
          <div className="flex flex-wrap justify-center">
            {shows.map((s) => (
              <ShowCards key={s.id} show={s}></ShowCards>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    query: showsQuerySelector(state),
    shows: showsSelector(state),
    loading: showsLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  queryChange: ShowsQueryChangeAction,
};

type ReduxProps = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ShowsList_Page);

// create store

// reducer

// action

// mapDispatchToprops {must define where the data is}

// ------Test 1-------- {right action with right data}

// switch statements to reducer

// -----Test2-------

// selectors {first selector own with out selectors}

// mapStateToProps

// ------Test3--------
