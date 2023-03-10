import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Show } from "../Models/Show";
import BrokenImage from "../Models/BrokenImage.jpg";

type ShowCardsProps = { show: Show };

const ShowCards: FC<ShowCardsProps> = ({ show }) => {
  return (
    <>
      <div className="max-w-xs rounded-md shadow-md p-2 m-1 ">
        <img
          src={show.image?.medium || show.image?.original || BrokenImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 "
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {show.name}
            </h2>
          </div>
          <Link
            to={"/show/" + show.id}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

ShowCards.defaultProps = {};

export default memo(ShowCards);
