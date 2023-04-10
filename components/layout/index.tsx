import React from "react";

import Footer from "components/layout/footer";
import Header from "components/layout/header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center flex-col relative">
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
