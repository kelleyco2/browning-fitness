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
    text: "Workout and nutrition plans customized to personal goals, abilities, and experience are granted to each client. Plans gradually increase in difficulty and complexity week to week to ensure progress is made and goals are achieved.",
    icon: IconType.LAPTOP,
  },
  {
    subheading: "Instructional Videos",
    text: "Videos explaining and demonstrating how to properly perform each exercise are available to each athlete to help athletes maximize results and minimize risk of injury.",
    icon: IconType.CAMERA,
  },
  {
    subheading: "Additional resources",
    text: "Recommendations for supplements, recovery, and other therapies to improve fitness results are granted to each client. Specific instructions as to what, how, when, and why each recommendation should be applied are given as well.",
    icon: IconType.DUMBBELL,
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
          mainHeading="Reach your goals on YOUR time."
          serviceList={ServiceList}
          gridTabletCols=""
          gridDesktopTabletCols="xl:grid-cols-3"
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
