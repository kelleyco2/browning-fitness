import Section, { SectionVariants } from "./Section";

type FullWidthQuoteProps = {
  quote: string;
};

const FullWidthQuote = ({ quote }: FullWidthQuoteProps) => {
  return (
    <Section
      variant={SectionVariants.LARGE}
      outerClassName="bg-primary text-center"
    >
      <h2 className="font-f5 xl:font-f3 text-white max-w-[1180px] mx-auto">
        {quote}
      </h2>
    </Section>
  );
};

export default FullWidthQuote;
