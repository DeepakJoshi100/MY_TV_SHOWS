import { FC, memo } from "react";

type GenreoillProps = { name: string };

const Genreoill: FC<GenreoillProps> = ({ name }) => {
  return <p className="font-semibold">{name}</p>;
};

Genreoill.defaultProps = {};

export default memo(Genreoill);
