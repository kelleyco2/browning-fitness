import classNames from "classnames";
import Image from "next/image";

import Button, { ButtonVariants } from "./Button";
import Section, { SectionVariants } from "./Section";

type Content = {
  heading: string;
  subheading?: string;
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
  width?: number;
  height?: number;
};

type TwoColumnProps = {
  content?: Content;
  cta?: CTA;
  image?: Image;
  imageLeft?: boolean;
  hero?: boolean;
};

const defaultContent: Content = {
  heading: "Heading Text",
  subheading: "Subheading Text",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac a fringilla pharetra, scelerisque tellus. Diam etiam id dolor pretium lectus tempor mi enim ultricies.",
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
      <div className="relative mb-4 md:mb-0 md:w-1/2 w-full h-[375px]">
        <Image
          src={image.src ?? "/placeholder.png"}
          alt={image.alt}
          // width={image.width ?? 510}
          // height={image.height ?? 470}
          fill
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
        {content.subheading && <p className="mb-6">{content.subheading}</p>}
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
