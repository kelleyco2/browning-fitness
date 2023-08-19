import { ReactNode } from "react";
import Footer from "./Footer";
import Header, { HeaderVariants } from "./Header";

type LayoutProps = {
  headerVariant: HeaderVariants;
  children: ReactNode;
};

const Layout = ({ headerVariant, children }: LayoutProps) => {
  return (
    <>
      <Header variant={headerVariant} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
