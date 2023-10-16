import classNames from "classnames";
import { ReactNode } from "react";

type GridProps = {
  tabletCols?: string;
  desktopCols?: string;
  children: ReactNode;
  gap?: string;
};

const Grid = ({
  tabletCols = "md:grid-cols-2",
  desktopCols = "xl:grid-cols-4",
  gap,
  children,
}: GridProps) => {
  return (
    <ul
      className={classNames(
        `grid grid-col-1 justify-items-center`,
        tabletCols,
        desktopCols,
        gap
      )}
    >
      {children}
    </ul>
  );
};

export default Grid;
