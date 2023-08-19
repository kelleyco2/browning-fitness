import classNames from "classnames";
import Image from "next/image";

import Button, { ButtonVariants } from "./Button";
import Section, { SectionVariants } from "./Section";

type Content = {
  heading: string;
  body: string;
};

export type CTA = {
  href: string;
  text: string;
  variant: ButtonVariants;
};

type Image = {
  src: string | null;
  alt: string;
};

type TwoColumnProps = {
  content?: Content;
  cta?: CTA;
  image?: Image;
  imageLeft?: boolean;
  hero?: boolean;
};

const defaultContent: Content = {
  heading: "Heading goes here",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada ligula enim consequat malesuada quisque amet. Sed leo, pretium curabitur sed adipiscing massa.",
};

const defaultCta: CTA = {
  href: "/",
  text: "Call to action",
  variant: ButtonVariants.PRIMARY,
};

const defaultImage: Image = {
  src: null,
  alt: "default alt",
};

const TwoColumn = ({
  content = defaultContent,
  cta = defaultCta,
  image = defaultImage,
  imageLeft = false,
  hero = false,
}: TwoColumnProps) => {
  const innerSectionClassName = classNames(
    "max-w-[1180px] mx-auto flex flex-col items-center justify-center",
    {
      "-mt-8": hero,
      "md:flex-row": imageLeft,
      "md:flex-row-reverse": !imageLeft,
    }
  );
  return (
    <Section
      variant={SectionVariants.LARGE}
      innerClassName={innerSectionClassName}
    >
      <div className="relative mb-4 md:mb-0 md:w-1/2 w-full">
        <Image
          src={image.src ?? "/placeholder.png"}
          alt={image.alt}
          width={578}
          height={410}
          priority={hero}
        />
      </div>
      <div className="hidden md:block w-20 h-full" />
      <div className="flex flex-col md:w-1/2 max-w-[578px]">
        {hero ? (
          <h1 className="font-f1 mb-2">{content.heading}</h1>
        ) : (
          <h2 className="font-f1 mb-2">{content.heading}</h2>
        )}
        <p className="font-base text-grey2 mb-6">{content.body}</p>
        <Button
          variant={ButtonVariants.PRIMARY}
          href={cta.href}
          className="w-fit"
        >
          {cta.text}
        </Button>
      </div>
    </Section>
  );
};

export default TwoColumn;
