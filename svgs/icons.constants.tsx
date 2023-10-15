import { SVGProps } from "react";
import { ReactComponent as RightArrow } from "./right-arrow.svg";
import { ReactComponent as LeftArrow } from "./left-arrow.svg";
import { ReactComponent as X } from "./x.svg";
import { ReactComponent as FB } from "./FB.svg";
import { ReactComponent as LinkedIn } from "./LinkedIn.svg";
import { ReactComponent as Laptop } from "./Laptop.svg";
import { ReactComponent as Camera } from "./Camera.svg";
import { ReactComponent as Trophy } from "./Trophy.svg";
import { ReactComponent as Dumbbell } from "./Dumbbell.svg";
import { ReactComponent as Speed } from "./Speed.svg";
import { ReactComponent as Instagram } from "./Instagram.svg";
import { ReactComponent as YT } from "./YT.svg";
import { ReactComponent as Tiktok } from "./Tiktok.svg";

export enum IconType {
  RIGHT_ARROW = "right-arrow",
  LEFT_ARROW = "left-arrow",
  X = "x",
  FB = "facebook",
  LINKEDIN = "linkedin",
  LAPTOP = "laptop",
  CAMERA = "camera",
  TROPHY = "trophy",
  DUMBBELL = "dumbbell",
  SPEED = "speed",
  INSTAGRAM = "instagram",
  YT = "youtube",
  TIKTOK = "tiktok",
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
  [IconType.LAPTOP]: (props) => <Laptop {...props} />,
  [IconType.CAMERA]: (props) => <Camera {...props} />,
  [IconType.TROPHY]: (props) => <Trophy {...props} />,
  [IconType.DUMBBELL]: (props) => <Dumbbell {...props} />,
  [IconType.SPEED]: (props) => <Speed {...props} />,
  [IconType.INSTAGRAM]: (props) => <Instagram {...props} />,
  [IconType.YT]: (props) => <YT {...props} />,
  [IconType.TIKTOK]: (props) => <Tiktok {...props} />,
};
