import Layout from "../components/Layout";
import { HeaderVariants } from "../components/Header";
import TwoColumn from "../components/TwoColumn";
import { useRouter } from "next/router";
import SEO from "../components/SEO";
import FullWidthCta from "../components/FullWidthCta";
import { ButtonVariants } from "../components/Button";
import FullWidthQuote from "../components/FullWidthQuote";

const About = () => {
  const router = useRouter();
  return (
    <>
      <SEO
        title="About | Browning Fitness"
        description="Become a better athlete on YOUR schedule."
        asPath={router.asPath}
      />
      <Layout headerVariant={HeaderVariants.SECONDARY}>
        <TwoColumn
          cta={{
            href: "/pricing",
            text: "Subscribe now",
            variant: ButtonVariants.PRIMARY,
          }}
          content={{
            heading: "The Coach",
            body: "I'm Zak Browning, a dedicated Sports Performance Coach with a passion for helping athletes of all ages and skill levels enhance their strength, speed, and overall athleticism. I'm committed to developing both physical and mental skills in athletes across various sports, using my knowledge and experience to help you become the athlete you aspire to be.",
          }}
          image={{
            src: "/Zak-Browning.jpeg",
            alt: "Zak Browning",
            width: 375,
            height: 375,
          }}
        />
        <FullWidthQuote
          quote={`"Winning is not a sometime thing; it's an all the time thing. You don't win once in a while you don't do things right once in a while you do them right all the time. Winning is habit." - Vince Lombardi`}
        />
        <TwoColumn
          cta={{
            href: "/pricing",
            text: "Subscribe now",
            variant: ButtonVariants.PRIMARY,
          }}
          imageLeft
          content={{
            heading: "Zak's Athletic Bio",
            body: "Zak, hailing from Vancouver, WA, was a multi-sport athlete during his formative years, excelling particularly in high school football. He achieved remarkable feats, including setting his school's sack record, earning All-Region and All-State honors, and being named Player of the Year in his league. He then attended Southern Utah University on a football scholarship, making a significant impact as a freshman linebacker. Despite a sophomore year marred by injuries, he secured 1st Team All-Conference honors and helped his team reach the playoffs before an early retirement due to injuries.",
          }}
          image={{
            src: "/Zak-football.jpeg",
            alt: "Zak football",
          }}
        />

        <FullWidthCta
          heading="Ready to start training?"
          subheading=""
          cta={{
            href: "/pricing",
            text: "Subscribe now",
            variant: ButtonVariants.WHITE,
          }}
        />
      </Layout>
    </>
  );
};

export default About;
