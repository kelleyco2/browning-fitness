import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import prisma from "../lib/prisma";
import { StripeSubscriptionStatus } from "@prisma/client";
import Layout from "../components/Layout";
import { HeaderVariants } from "../components/Header";
import Section, { SectionVariants } from "../components/Section";
import Grid from "../components/Grid";
import { IconType } from "../svgs/icons.constants";
import Icon from "../components/Icon";
import Image from "next/image";
import Button, { ButtonVariants } from "../components/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import SEO from "../components/SEO";

type DashboardPropsType = {
  isSubscribed: StripeSubscriptionStatus;
};

const Dashboard = ({ isSubscribed }: DashboardPropsType) => {
  const { push, asPath } = useRouter();

  const manageBilling = async () => {
    const res = await fetch("/api/create-billing-portal", {
      headers: { "Content-Type": "application/json" },
    });

    if (res.status !== 200) {
      const result = await res.json();

      return toast.error(result.error);
    }

    const result = await res.json();

    if (result.billingPortalUrl) push(result.billingPortalUrl);
  };

  return (
    <>
      <SEO
        title="Dashboard | Browning Fitness"
        description="Become a better athlete on YOUR schedule."
        asPath={asPath}
      />
      <Layout headerVariant={HeaderVariants.SECONDARY}>
        <Section variant={SectionVariants.LARGE}>
          <div className="flex justify-between mb-12">
            <h1 className="font-f1 text-center ">Program Dashboard</h1>
            <Button variant={ButtonVariants.PRIMARY} onClick={manageBilling}>
              Manage billing and subscription
            </Button>
          </div>
          <Grid gap="gap-x-6 gap-y-12" desktopCols="xl:grid-cols-3">
            {[
              {
                title: "Speed program",
                subtitle:
                  "Speed kills. Use latest research based training to obtain new levels of acceleration and linear speed.",
                icon: "/speed.png",
              },
              {
                title: "Agility program",
                subtitle:
                  "Training to increase agility is complicated. Use our tried and proven formula to improve foot speed and change of direction quickness.",
                icon: "/agility.png",
              },
              {
                title: "Vertical program",
                subtitle:
                  "It's more than dunking. Our program uses advanced drills to boost vertical jump and explosiveness for any sport.",
                icon: "/vertical.png",
              },
              {
                title: "Strength program",
                subtitle:
                  "Maximizing strength and muscle is complex, but our program is backed by research and results.",
                icon: IconType.DUMBBELL,
              },
              {
                title: "Recovery program",
                subtitle:
                  "Recovery is vital in training. Nutrition, stretching, and sleep are key. We'll design a protocol to boost your progress.",
                icon: "/recovery.png",
              },
            ].map(({ title, subtitle, icon }) => (
              <li
                key={title}
                className="flex flex-col justify-center items-center p-4 shadow-[0_5px_15px_2px_rgb(0,0,0,0.15)]"
              >
                {title === "Strength program" ? (
                  <div className="w-12 h-12 mb-4">
                    <Icon
                      type={icon as IconType}
                      className="stroke-[#767676]"
                    />
                  </div>
                ) : (
                  <Image
                    src={icon}
                    alt="speed"
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                )}
                <h2 className="font-f4 mb-2">{title}</h2>
                <p className="text-center mb-4">{subtitle}</p>
                {isSubscribed ? (
                  <Button
                    className="!w-full justify-center"
                    variant={ButtonVariants.PRIMARY}
                  >
                    Download program
                  </Button>
                ) : (
                  <Button
                    className="!w-full justify-center"
                    variant={ButtonVariants.PRIMARY}
                    href="/pricing"
                  >
                    Subscribe now
                  </Button>
                )}
              </li>
            ))}
          </Grid>
        </Section>
      </Layout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  });

  return {
    props: {
      isSubscribed: user?.stripeSubscriptionStatus,
    },
  };
};
