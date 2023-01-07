import { FC, memo } from "react";
import { ImSpinner } from "react-icons/im";

type LoadingSpinnerProps = {};

const LoadingSpinner: FC<LoadingSpinnerProps> = (props) => {
  return (
    <>
      <ImSpinner className="animate-spin" />
    </>
  );
};

LoadingSpinner.defaultProps = {};

export default memo(LoadingSpinner);
