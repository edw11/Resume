import Footer from "@/components/Footer";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <section className=" pt-28 pb-14">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
