import { FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";
import Icon from "./Icon";
import { IconType } from "../svgs/icons.constants";

// TODO: use terms from Figma
export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WHITE = "white",
}

type ButtonProps = {
  variant: ButtonVariants;
  href: string;
  className?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  variant = ButtonVariants.PRIMARY,
  href,
  className,
  iconRight,
  iconLeft,
  onClick,
  children,
}) => {
  const isPrimary = variant === ButtonVariants.PRIMARY;
  const isSecondary = variant === ButtonVariants.SECONDARY;
  const isWhite = variant === ButtonVariants.WHITE;

  const iconSpacing = `${iconLeft ? "mr-2.5" : "ml-2.5"}`;

  const iconClass = classNames({
    [`fill-white ${iconSpacing}`]: isPrimary,
    [`fill-primary ${iconSpacing}`]: isSecondary,
    [`fill-black ${iconSpacing}`]: isWhite,
  });

  const sharedButtonClasses = `flex w-fit items-center`;
  const buttonClass = classNames(
    "p-4 font-base",
    {
      [`${sharedButtonClasses} bg-primary text-white`]: isPrimary,
      [`${sharedButtonClasses} bg-transparent text-primary border-2 border-primary`]:
        isSecondary,
      [`${sharedButtonClasses} bg-white text-black`]: isWhite,
    },
    className
  );

  return onClick !== undefined ? (
    <button className={buttonClass} onClick={onClick}>
      {iconLeft && <Icon type={IconType.LEFT_ARROW} className={iconClass} />}
      {children}
      {iconRight && <Icon type={IconType.RIGHT_ARROW} className={iconClass} />}
    </button>
  ) : (
    <Link className={buttonClass} href={href}>
      {iconLeft && <Icon type={IconType.LEFT_ARROW} className={iconClass} />}
      {children}
      {iconRight && <Icon type={IconType.RIGHT_ARROW} className={iconClass} />}
    </Link>
  );
};

export default Button;
