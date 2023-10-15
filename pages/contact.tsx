import Layout from "../components/Layout";
import { HeaderVariants } from "../components/Header";
import Input from "../components/Input";
import Button, { ButtonVariants } from "../components/Button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState<string | null>("");
  const [lastName, setLastName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormVerification = () => {
    if (!firstName || !lastName || !email || !message) {
      if (!firstName) setFirstName(null);
      if (!lastName) setLastName(null);
      if (!email) setEmail(null);
      if (!message) setMessage(null);
      setErrorMessage("Red fields are required");
      return {
        isReady: false,
      };
    }

    if (firstName && lastName && email && message) {
      setErrorMessage("");
      return {
        isReady: true,
      };
    }
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async () => {
    setSuccessMessage(null);
    // @ts-ignore
    const { isReady } = handleFormVerification();

    if (isReady) {
      setLoading(true);

      const res = await axios
        .post("/api/contact", {
          firstName,
          lastName,
          email,
          message,
        })
        .catch((err) => {
          setLoading(false);
          setSuccess(false);
          setErrorMessage(err.response.data.message);
        });

      if (res?.status === 200) {
        setLoading(false);
        setSuccessMessage(res?.data.message);
        setSuccess(true);
        reset();
      }
    }
  };

  return (
    <Layout headerVariant={HeaderVariants.PRIMARY}>
      <section className="mx-auto px-4 md:px-10 py-12 md:py-[88px] max-w-[780px]">
        <h1 className="mb-4 font-f1">Contact me</h1>
        <p className="mb-6 text-grey2 font-f4">Contact me</p>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <Input
              value={firstName}
              setValue={setFirstName}
              name="firstName"
              label="First name"
              className="mb-4 md:mr-2 w-full"
            />
            <Input
              value={lastName}
              setValue={setLastName}
              name="lastName"
              label="Last name"
              className="mb-4 w-full"
            />
          </div>
          <Input
            value={email}
            setValue={setEmail}
            name="email"
            label="Email"
            className="mb-4"
          />
          <Input
            value={message}
            setValue={setMessage}
            name="message"
            label="Message"
            textarea
            textareaClassName="resize-none h-[154px]"
          />
        </div>
        <div className="flex justify-between items-center w-full mt-6">
          <p className={`${successMessage ? "text-success" : "text-error"}`}>
            {successMessage ? successMessage : errorMessage}
          </p>
          <Button
            href={""}
            onClick={handleSubmit}
            variant={ButtonVariants.PRIMARY}
          >
            {loading
              ? "Submitting..."
              : success
              ? "Submitted!"
              : "Submit message"}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
