import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

export enum SectionVariants {
  MEDIUM = "medium",
  LARGE = "large",
  XL = "xl",
}

type SectionProps = {
  variant: SectionVariants;
  outerClassName?: string;
  innerClassName?: string;
  children: ReactNode;
  style?: CSSProperties;
};

const Section = ({
  variant,
  outerClassName,
  innerClassName,
  children,
  style,
}: SectionProps) => {
  const isMedium = variant === SectionVariants.MEDIUM;
  const isLarge = variant === SectionVariants.LARGE;
  const isXl = variant === SectionVariants.XL;

  const sectionClassNames = classNames(
    "mx-auto px-4 md:px-10 py-12",
    outerClassName,
    {
      "lg:py-16": isMedium,
      "lg:py-[88px]": isLarge,
      "lg:py-[148px]": isXl,
    }
  );

  return (
    <section className={sectionClassNames} style={style}>
      <div className={classNames(innerClassName, "max-w-[1180px] mx-auto")}>
        {children}
      </div>
    </section>
  );
};

export default Section;
