import { SVGProps } from "react";
import { ReactComponent as RightArrow } from "./right-arrow.svg";
import { ReactComponent as LeftArrow } from "./left-arrow.svg";
import { ReactComponent as X } from "./x.svg";
import { ReactComponent as FB } from "./FB.svg";
import { ReactComponent as LinkedIn } from "./LinkedIn.svg";

export enum IconType {
  RIGHT_ARROW = "right-arrow",
  LEFT_ARROW = "left-arrow",
  X = "x",
  FB = "facebook",
  LINKEDIN = "linkedin",
}

export const iconComponentMap: Record<
  IconType,
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  [IconType.RIGHT_ARROW]: (props) => <RightArrow {...props} />,
  [IconType.LEFT_ARROW]: (props) => <LeftArrow {...props} />,
  [IconType.X]: (props) => <X {...props} />,
  [IconType.FB]: (props) => <FB {...props} />,
  [IconType.LINKEDIN]: (props) => <LinkedIn {...props} />,
};
