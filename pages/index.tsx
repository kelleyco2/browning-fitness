import { useState } from "react";
import Button, { ButtonVariants } from "../components/Button";
import FullWidthCta from "../components/FullWidthCta";
import FullWidthQuote from "../components/FullWidthQuote";
import { HeaderVariants } from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Radio from "../components/Radio";
import Section, { SectionVariants } from "../components/Section";
import Services from "../components/Services";
import TwoColumn from "../components/TwoColumn";
import { useSession } from "next-auth/react";

export default function Home() {
  const [value, setValue] = useState<string | null>("");
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout headerVariant={HeaderVariants.SECONDARY}>
      <Section variant={SectionVariants.LARGE}>
        <Button
          className="mb-4"
          href="/"
          variant={ButtonVariants.PRIMARY}
          iconRight
        >
          Test button
        </Button>
        <Input
          name="test-input"
          label="Test input"
          value={value}
          setValue={setValue}
        />
        <Radio className="my-4" name="radio" label="Test radio" />
        <Radio name="radio" label="Test radio" />
      </Section>
      <FullWidthCta subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac a fringilla pharetra, scelerisque tellus. Diam etiam id dolor pretium lectus tempor mi enim ultricies." />
      <Services />
      <TwoColumn />
      <FullWidthQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac a fringilla pharetra, scelerisque tellus. Diam etiam id dolor pretium lectus tempor mi enim ultricies." />
    </Layout>
  );
}
