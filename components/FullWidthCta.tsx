import Button, { ButtonVariants } from "./Button";
import Section, { SectionVariants } from "./Section";
import { CTA } from "./TwoColumn";

type FullWidthCtaProps = {
  heading?: string;
  subheading?: string;
  cta?: CTA;
  hero?: boolean;
};

const FullWidthCta = ({
  heading = "Heading Text",
  subheading,
  cta = {
    href: "/",
    text: "Call to action",
    variant: ButtonVariants.WHITE,
  },
  hero,
}: FullWidthCtaProps) => {
  return (
    <Section
      variant={hero ? SectionVariants.XL : SectionVariants.LARGE}
      outerClassName="bg-tertiary"
      innerClassName="flex flex-col items-center text-white"
      style={
        hero
          ? {
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/gym.jpg')",
            }
          : {}
      }
    >
      {hero ? (
        <h1 className="font-f1 mb-2 text-center md:mb-4">{heading}</h1>
      ) : (
        <h2 className="font-f2 mb-2 text-center md:mb-4">{heading}</h2>
      )}
      {subheading && hero ? (
        <h3 className="font-f4 mb-6">{subheading}</h3>
      ) : (
        <p className="mb-6">{subheading}</p>
      )}
      <Button variant={cta.variant} href={cta.href}>
        {cta.text}
      </Button>
    </Section>
  );
};

export default FullWidthCta;
