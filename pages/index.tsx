import { useRouter } from "next/router";
import { ButtonVariants } from "../components/Button";
import FullWidthCta from "../components/FullWidthCta";
import { HeaderVariants } from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Services from "../components/Services";
import TwoColumn from "../components/TwoColumn";
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
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="Browning Fitness"
        description="Become a better athlete on YOUR schedule."
        asPath={asPath}
      />
      <Layout headerVariant={HeaderVariants.SECONDARY}>
        <FullWidthCta
          hero
          heading="Browning Fitness"
          cta={{
            href: "/pricing",
            text: "Subscribe now",
            variant: ButtonVariants.WHITE,
          }}
        />
        <Services
          mainHeading="Become a better athlete on YOUR time."
          serviceList={ServiceList}
        />
        <TwoColumn
          content={{
            heading: "",
            subheading: "Elevate your athleticism",
            body: "Becoming a better all-around athlete is an inspiring journey of continuous growth. It's about refining your physical skills, nurturing mental resilience, and demonstrating sportsmanship. Through dedicated training, proper nutrition, and unwavering determination, you can reach new heights. Set bold goals, embrace expert guidance, and cultivate a relentless passion for self-improvement, both on and off the field. Your path to excellence is marked by persistence and boundless inspiration.",
          }}
          image={{
            src: "/dumbells.jpg",
            alt: "dumbells",
          }}
          cta={{
            href: "/pricing",
            text: "Subscribe now",
            variant: ButtonVariants.PRIMARY,
          }}
        />
        <FullWidthCta
          heading="Commit to unlocking your full pototential"
          subheading="Embrace your athletic journey, where unwavering commitment breeds excellence. Each step forges the strongest version of you."
          cta={{
            href: "/pricing",
            text: "Subscribe now",
            variant: ButtonVariants.WHITE,
          }}
        />
      </Layout>
    </>
  );
}
