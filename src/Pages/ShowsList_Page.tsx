import { FC } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCards from "../Components/ShowCards";

type ShowsList_PageProps = {};

const ShowsList_Page: FC<ShowsList_PageProps> = (props) => {
  return (
    <>
      <div className="mt-2">
        <SearchBar />
        <div className="flex flex-wrap justify-center">
          <ShowCards />
          <ShowCards />
          <ShowCards />
          <ShowCards />
          <ShowCards />
          <ShowCards />
        </div>
      </div>
    </>
  );
};

ShowsList_Page.defaultProps = {};

export default ShowsList_Page;
