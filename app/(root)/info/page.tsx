import InfoDetails from "@/components/InfoDetails";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="inset-0 bg-gradient-to-b from-white/10 max-md:from-white/10 to-black  ">
      <section className="fixed w-full z-10">
        <Navbar state={true} />
      </section>
      <div className="pt-28 flex flex-col w-full items-center justify-center px-9">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-start w-full gap-3">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <p>About Me</p>
            </div>
            <p className="text-4xl md:text-5xl text-shadow min-w-[20rem] max-w-[65rem]">
              I&apos; m passionate about creating beautiful products that
              empower people.
            </p>
          </div>
          <InfoDetails />

          <div className="flex flex-col items-start w-full mt-20 border-t-2 border-grayAlt3  xl:w-[70rem]">
            <div className="flex items-center gap-3 mt-12">
              <div className="w-3 h-3 rounded-full bg-white blur-[1px]"></div>
              <p className="text-sm text-grayAlt2 md:text-sm">EXPERIENCE</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 w-full md:flex-row md:justify-between  ">
            <h1 className="text-3xl">Discord</h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl">Sr. Product Designer, Core Product</h1>
                <p>07/&apos;23 - Present</p>
              </div>
              <p className="max-w-md">
                I owned a product that was part of Stadia&apos; s developer
                suite, and led design on the website for enabling Bluetooth on
                Stadia Controllers post-sunset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
