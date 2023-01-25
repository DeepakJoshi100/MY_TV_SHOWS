import { FC, memo } from "react";
import { CAST } from "../Models/Cast";
import { placeholderImage } from "../Models/Show";

type CastCardProps = { cast: CAST };
const CastCard: FC<CastCardProps> = (cast) => {
  return (
    <>
      <div className="p-1 m-1 flex flex-col items-center ">
        <img
          className="
          hover:border-b-8 border-indigo-600 duration-700 object-center rounded-full w-full aspect-square"
          src={cast.cast.image?.medium || placeholderImage}
          alt=""
        />

        <p className="text-gray-500 font-semibold">{cast.cast.name}</p>
      </div>
    </>
  );
};

CastCard.defaultProps = {};

export default memo(CastCard);
