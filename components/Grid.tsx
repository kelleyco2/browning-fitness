import classNames from "classnames";
import { ReactNode } from "react";

type GridProps = {
  tabletCols?: number;
  desktopCols?: number;
  children: ReactNode;
};

const Grid = ({ tabletCols = 2, desktopCols = 4, children }: GridProps) => {
  return (
    <ul
      className={classNames(
        `grid grid-col-1 justify-items-center md:grid-cols-2 xl:grid-cols-4`
      )}
    >
      {children}
    </ul>
  );
};

export default Grid;
