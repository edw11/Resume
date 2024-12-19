import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="fixed w-full z-10">
        <Navbar />
      </section>
      {children}
      <section className=" pt-28 pb-14">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
