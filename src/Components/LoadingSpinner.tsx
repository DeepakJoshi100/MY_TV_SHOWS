import { FC, memo } from "react";
import { ImSpinner } from "react-icons/im";

type LoadingSpinnerProps = {};

const LoadingSpinner: FC<LoadingSpinnerProps> = (props) => {
  return (
    <>
      <ImSpinner className="animate-spin text-center w-full" />
    </>
  );
};

LoadingSpinner.defaultProps = {};

export default memo(LoadingSpinner);
