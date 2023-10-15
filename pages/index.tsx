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
import { IconType } from "../svgs/icons.constants";

const ServiceList = [
  {
    subheading: "Custom Online Program",
    text: "Each athlete is created a personal program based on their goals, schedule, developmental level, and additional training. Programs are adjusted weekly or even daily as circumstances change.",
    icon: IconType.LAPTOP,
  },
  {
    subheading: "Instructional Videos",
    text: "Videos  are available explaining and demonstrating how to properly perform each exercise are available to help athletes maximize results and minimize risk of injury.",
    icon: IconType.CAMERA,
  },
  {
    subheading: "Personal Coaching",
    text: "A personal coach is assigned to athletes to give guidance as needed. Coaches are available via email and online appointments to direct athletes every step of the way.",
    icon: IconType.DUMBBELL,
  },
  {
    subheading: "Rewards Program",
    text: "As athletes complete workouts, they earn points towards rewards program. Points can be spent on prizes such as brand apparel, gift cards, program discounts, and much more.",
    icon: IconType.TROPHY,
  },
];

export default function Home() {
  const [value, setValue] = useState<string | null>("");
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout headerVariant={HeaderVariants.SECONDARY}>
      <FullWidthCta
        hero
        heading="Sports R good"
        subheading="Let's sport n stuff"
        cta={{
          href: "/contact",
          text: "Contact me",
          variant: ButtonVariants.WHITE,
        }}
      />
      <Services
        mainHeading="Become a better athlete on YOUR time."
        serviceList={ServiceList}
      />
      <TwoColumn
        content={{
          heading: "Support the team!",
          subheading: "Follow us on social media",
          body: "",
        }}
      />
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
      <TwoColumn />
      <FullWidthQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac a fringilla pharetra, scelerisque tellus. Diam etiam id dolor pretium lectus tempor mi enim ultricies." />
    </Layout>
  );
}
