import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3000`
    : `https://browning-fitness.vercel.app`;

export default stripe;
