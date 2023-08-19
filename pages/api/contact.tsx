import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import config from "../../config";
// @ts-ignore
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { companyName, receivingEmailAddress } = config;
  const { firstName, lastName, email, message } = req.body;

  const senderConfirmation = {
    to: email,
    // TODO: Update
    from: `${companyName} Form<contact@omnusdesign.com>`,
    subject: `Message received!`,
    text: `Your message to ${companyName} has been received! You'll be contacted within 24 hours`,
  };

  // TODO: Update
  const toCompany = {
    to:
      process.env.NODE_ENV === "development"
        ? "kelleyco2@gmail.com"
        : receivingEmailAddress,
    from: "Website Contact Form<contact@omnusdesign.com>",
    subject: `New message from: ${firstName} ${lastName}!`,
    text: `${message}\nSenders email address: ${email}`,
  };

  try {
    await sgMail.send(senderConfirmation);
    await sgMail.send(toCompany);

    res.status(200).send({ message: "Message has been sent!" });
  } catch (error) {
    res
      // @ts-ignore
      .status(error.code)
      // @ts-ignore
      .send({ message: error.response.body.errors[0].message });
  }
}
