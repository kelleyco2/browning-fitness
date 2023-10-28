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
            body: "My name is Zak Browning. I am a Sports Performance Coach working to help athletes build and improve strength, speed, and overall athleticism. I have experience working with athletes of all ages and levels ranging from youth to collegiate. I am 100% committed to assisting my athletes develop the physical and mental skills necessary to advance their game. This is something I am truly passionate about.No matter the sport, if you are looking to run faster, jump higher, or hit harder, allow me to use my knowledge, experience, and dedication to help you transform into the athlete you want to be.",
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
            body: "Zak is from Vancouver, WA. In high school he competed in football, basketball, and track & field. Zak particularly excelled in football where he lettered 3 years, set his high school's sack record, was a 2x All-Region Linebacker, an All-State Linebacker, an All-State Running Back, and was named the Greater St. Helen's League Player of the Year. Receiving a football scholarship, Zak attended Southern Utah University. As a true freshman, he led the Big Sky Conference in tackles, was named the Big Sky New Comer of the Year, was a Jerry Rice Award finalist, and was named a Freshman All-American. In his Sophomore year, Zak missed 3 games due to injury, but was still able to earn 1st Team All-Conference honors and help his team to the school's first ever playoff appearance. Unfortunately, injuries forced Zak's early retirement after his sophomore year.",
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
