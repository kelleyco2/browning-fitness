import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { BounceLoader } from "react-spinners";
import { StripeSubscriptionStatus } from "@prisma/client";

import { authOptions } from "./api/auth/[...nextauth]";
import prisma from "../lib/prisma";
import Layout from "../components/Layout";
import { HeaderVariants } from "../components/Header";
import Section, { SectionVariants } from "../components/Section";
import Grid from "../components/Grid";
import Button, { ButtonVariants } from "../components/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import SEO from "../components/SEO";

type DashboardPropsType = {
  isSubscribed: StripeSubscriptionStatus;
};

const Dashboard = ({ isSubscribed }: DashboardPropsType) => {
  const { push, asPath } = useRouter();
  const [loading, setLoading] = useState(false);

  const manageBilling = async () => {
    setLoading(true);
    const res = await fetch("/api/create-billing-portal", {
      headers: { "Content-Type": "application/json" },
    });

    if (res.status !== 200) {
      const result = await res.json();

      setLoading(false);

      return toast.error(result.error);
    }

    const result = await res.json();

    if (result.billingPortalUrl) {
      setLoading(false);
      push(result.billingPortalUrl);
    }
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
          <div className="flex flex-col items-center md:flex-row justify-between mb-12">
            <h1 className="font-f1 text-center ">Program Dashboard</h1>
            {true && (
              <Button
                className="!w-[277px] mt-6 md:mt-0"
                variant={ButtonVariants.PRIMARY}
                onClick={manageBilling}
              >
                {loading ? (
                  <BounceLoader className="mx-auto" color="#fff" size={22} />
                ) : (
                  "Manage billing and subscription"
                )}
              </Button>
            )}
          </div>
          <Grid gap="gap-x-6 gap-y-12" desktopCols="xl:grid-cols-2">
            {[
              {
                title: "Basketball Workout Programs",
                subtitle:
                  "These programs are structured fitness regimens designed to increase a player's vertical, speed, agility, and overall athleticism on the basketball court. A variety of options are available to accommodate schedule, equipment availability, and workload.",
                icon: "/vertical.png",
                link: "https://docs.google.com/spreadsheets/d/1omNhgSim6IdZ8oeul-lXrtLWtHfUzL5mimE7wlWeCjs/edit?usp=gmail",
              },
              {
                title: "Football Workout Programs",
                subtitle:
                  "Our football programs incorporate a variety of exercises and drills that focus on areas such as speed, agility, and strength to help our athletes become dominant out on the gridiron. A variety of options are available to accommodate schedule, equipment availability, and workload.",
                icon: "/agility.png",
                link: "https://docs.google.com/spreadsheets/d/1omNhgSim6IdZ8oeul-lXrtLWtHfUzL5mimE7wlWeCjs/edit?usp=gmail",
              },
              {
                title: "Nutrition Tools",
                subtitle:
                  "Given the uniqueness of every athlete regarding goals, metabolism, food tolerances, etc., nutrition can be complicated and confusing. Arm yourself with the tools needed to assemble a nutrition plan that will help you attain your specific goals.",
                icon: "/nutrition.png",
                link: "https://docs.google.com/document/d/1CPA0Z3VoV6BF75_OFfb4-JSxji58TGsAYpovbGND-Q0/edit?usp=gmail",
              },
              {
                title: "Recovery Tools",
                subtitle:
                  "Many athletes undervalue and misunderstand proper recovery. However, an effective recovery regimen can be the difference between significant and minor improvement, as well as prevent injury. Use these tools to take your progress to a new level.",
                icon: "/recovery-icon.png",
                link: "https://docs.google.com/document/d/1YkpK2SnsG-Oo7_CJhgnvK23pQbL3ygry8-BRwhwZGD4/edit?usp=gmail",
              },
            ].map(({ title, subtitle, icon, link }) => (
              <li
                key={title}
                className="flex flex-col justify-center items-center p-4 shadow-[0_5px_15px_2px_rgb(0,0,0,0.15)]"
              >
                <Image
                  src={icon}
                  alt="speed"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h2 className="font-f4 mb-2">{title}</h2>
                <p className="text-center mb-4">{subtitle}</p>
                {isSubscribed ? (
                  <Button
                    className="!w-full justify-center"
                    variant={ButtonVariants.PRIMARY}
                    href={link}
                  >
                    View program
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
