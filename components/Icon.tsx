import { SVGProps } from "react";
import { IconType, iconComponentMap } from "../svgs/icons.constants";

interface IconProps extends SVGProps<SVGSVGElement> {
  type: IconType;
}

const Icon = ({ type, ...props }: IconProps) => {
  const icon = iconComponentMap[type];

  if (!Boolean(icon)) return null;

  return icon(props);
};

export default Icon;
