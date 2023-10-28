import { HeaderVariants } from "../components/Header";
import Layout from "../components/Layout";
import Section, { SectionVariants } from "../components/Section";

const Terms = () => {
  return (
    <Layout headerVariant={HeaderVariants.SECONDARY}>
      <Section variant={SectionVariants.MEDIUM}>
        <div className="h-[550px] max-w-xl mx-auto">
          <h1 className="font-f1 mb-4">Terms of service</h1>

          <p className="mb-4 text-[18px]">
            I understand that Browning Fitness LLC is not responsible for any
            consequences that take place as a result of the application of any
            training, advice, or suggestions offered by Browning Fitness LLC.
          </p>
          <p className="mb-4 text-[18px]">
            I understand that Browning Fitness LLC is not offering any medical
            advice and that a medical professional should be consulted with
            before applying any recommendations made regarding nutrition,
            supplementation, or otherwise.
          </p>

          <p className="mb-4 text-[18px]">
            I understand that all purchases are final and that no refunds are
            offered after any purchase is made.
          </p>

          <p className="mb-4 text-[18px]">
            I understand that the purchase of any Browning Fitness LLC fitness
            programs is intended for the use of one individual, and will not be
            shared with any other parties. Failure in compliance with this
            agreement can result in legal action.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Terms;
