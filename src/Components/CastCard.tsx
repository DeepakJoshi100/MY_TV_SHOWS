import { FC, memo } from "react";

type CastCardProps = { avatarLink: string; name: string };

const CastCard: FC<CastCardProps> = ({ avatarLink, name }) => {
  return (
    <>
      <div className="p-1 m-1">
        <img className="w-28 rounded-sm" src={avatarLink} alt="" />
        <p className="text-gray-500 font-semibold">{name}</p>
      </div>
    </>
  );
};

CastCard.defaultProps = {};

export default memo(CastCard);
