import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { getOrCreateStripeCustomerIdForUser } from "../../lib/stripe-webhook-handlers";
import prisma from "../../lib/prisma";
import stripe, { baseUrl } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.body.productId;
  try {
    if (!productId) {
      throw new Error("No product ID");
    }

    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ ok: false });
      return;
    }

    const customerId = await getOrCreateStripeCustomerIdForUser({
      prisma,
      stripe,
      userId: session.user?.id!,
    });

    if (!customerId) {
      throw new Error("Could not create customer");
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      client_reference_id: session.user?.id,
      payment_method_types: ["card"],
      mode: "subscription",
      allow_promotion_codes: true,
      line_items: [
        {
          price: productId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/dashboard`,
      cancel_url: `${baseUrl}/pricing`,
      subscription_data: {
        metadata: {
          userId: session.user?.id!,
        },
      },
    });

    if (!checkoutSession) {
      throw new Error("Could not create checkout session");
    }

    res.status(200).json({
      checkoutUrl: checkoutSession.url,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }

    res.status(500).json({ error: "Error creating checkout session" });
  }
}
