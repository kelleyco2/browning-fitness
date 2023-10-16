import { useState } from "react";
import { useRouter } from "next/router";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";

import { SubscriptionPriceId } from "../lib/stripe-products";
import Layout from "../components/Layout";
import { HeaderVariants } from "../components/Header";
import Section, { SectionVariants } from "../components/Section";
import Button, { ButtonVariants } from "../components/Button";
import SEO from "../components/SEO";
import { signIn } from "next-auth/react";

const MustBeLoggedIn = () => (
  <>
    <p>You must be logged in.</p>
    <p>
      Log in{" "}
      <span
        onClick={() => signIn(undefined, { callbackUrl: "/pricing/" })}
        className="text-primary font-bold underline"
      >
        here
      </span>
      .
    </p>
  </>
);

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, asPath } = useRouter();

  const createCheckoutSession = async (apiId: SubscriptionPriceId) => {
    setIsLoading(true);

    const res = await fetch("/api/checkout-sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: apiId,
      }),
    });

    if (res.status !== 200) {
      setIsLoading(false);
      if (res.status === 401) return toast.error(<MustBeLoggedIn />);

      const result = await res.json();

      toast.error(result.error);
    }

    const result = await res.json();

    if (result.checkoutUrl) push(result.checkoutUrl);
  };

  const MonthlyButton = () => {
    return (
      <Button
        className="!w-[150px] justify-center"
        onClick={() => createCheckoutSession(SubscriptionPriceId.MONTHLY)}
        variant={ButtonVariants.PRIMARY}
      >
        {isLoading ? <BounceLoader color="#fff" size={22} /> : "Subscribe now"}
      </Button>
    );
  };

  const YearlyButton = () => {
    return (
      <Button
        className="!w-[150px] justify-center"
        onClick={() => createCheckoutSession(SubscriptionPriceId.YEARLY)}
        variant={ButtonVariants.PRIMARY}
      >
        {isLoading ? <BounceLoader color="#fff" size={22} /> : "Subscribe now"}
      </Button>
    );
  };

  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <SEO
        title="Pricing | Browning Fitness"
        description="Become a better athlete on YOUR schedule."
        asPath={asPath}
      />
      <Layout headerVariant={HeaderVariants.SECONDARY}>
        <Section variant={SectionVariants.MEDIUM} outerClassName="bg-grey4">
          <div className="flex flex-col items-center">
            <h1 className="font-f1">Program Pricing</h1>
            <h3 className="font-f4 mt-4 text-center">
              Subscribe now and get access to your personalized program!
            </h3>
            <div className="my-6 flex items-center">
              <p className="mr-4 font-bold">Yearly</p>
              <label
                htmlFor="toggle"
                className="relative inline-flex cursor-pointer items-center"
              >
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only"
                  checked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                />

                <div
                  className={`shadow-[0px_4px_4px_rgba(67,67,68,0.08)]' rounded-full transition-all`}
                >
                  <div className="h-8 w-16 rounded-full border border-grey3 bg-white">
                    <div
                      className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-primary transition-all ${
                        isChecked ? "translate-x-8" : ""
                      }`}
                    />
                  </div>
                </div>
              </label>
              <p className="mx-4 font-bold">Monthly</p>
            </div>

            <div className="w-full max-w-xl rounded-lg bg-white shadow-pricing-card">
              <div className="h-2.5 w-full rounded-t-lg bg-primary" />
              <div className="mt-12 flex flex-col items-center border-b-2 px-8 pb-12">
                <p className="font-f1 text-primary">
                  {isChecked ? "$75" : "$750"}
                </p>
                <p className="my-4 whitespace-nowrap">
                  {isChecked
                    ? "Pay monthly, no contract required"
                    : "Pay upfront for annual savings"}
                </p>
                {isChecked ? <MonthlyButton /> : <YearlyButton />}
              </div>
              <div className="px-8 pb-10 pt-6">
                <ul>
                  {[
                    {
                      title: "Full access to all programs",
                      subtitle:
                        "Programs include speed, agility, vertical, strength and recovery.",
                    },
                    {
                      title: "Speed program",
                      subtitle:
                        "Speed kills. Use latest research based training to obtain new levels of acceleration and linear speed.",
                    },
                    {
                      title: "Agility program",
                      subtitle:
                        "Training to increase agility is complicated. Use our tried and proven formula to improve foot speed and change of direction quickness.",
                    },
                    {
                      title: "Vertical program",
                      subtitle:
                        "This is about more than just dunking a basketball. Cutting edge drills and exercises are used in this program to quickly and safely obtain new levels of vertical jump and overall exposiveness applicable for any sport.",
                    },
                    {
                      title: "Strength program",
                      subtitle:
                        "Unfortunately, it is a complicated matter when it comes to maximizing the building of strength and muscle. This program has the research and results to back it up. ",
                    },
                    {
                      title: "Recovery program",
                      subtitle:
                        "Often overlooked is the importance of recovery.  However, their are few elements to a training program more important. Nutrition, stretching, and proper sleep are just to name a few aspects of proper recovery. Let us program for you a recovery protocol that will spike your progress.",
                    },
                  ].map(({ title, subtitle }) => (
                    <li
                      key={title}
                      className="mb-12 flex flex-col last-of-type:mb-0"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 h-4 w-4 rounded-full border-4 border-primary" />
                        <p className="font-f4">{title}</p>
                      </div>
                      {subtitle && (
                        <p className="ml-8 mt-2 text-[18px]">{subtitle}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Pricing;
