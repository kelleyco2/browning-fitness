import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getOrCreateStripeCustomerIdForUser } from "../../lib/stripe-webhook-handlers";
import prisma from "../../lib/prisma";
import stripe, { baseUrl } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  try {
    const customerId = await getOrCreateStripeCustomerIdForUser({
      prisma,
      stripe,
      userId: session.user?.id!,
    });

    if (!customerId) {
      throw new Error("Could not create customer");
    }

    const stripeBillingPortalSession =
      await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${baseUrl}/dashboard`,
      });

    if (!stripeBillingPortalSession) {
      throw new Error("Could not create billing portal session");
    }

    res.status(200).json({ billingPortalUrl: stripeBillingPortalSession.url });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }

    res.status(500).json({ error: "Error creating checkout session" });
  }
}
