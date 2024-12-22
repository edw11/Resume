"use client";
import InfoDetails from "@/components/InfoDetails";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setLoading] = useState(true); // State to track loading
  const onImageLoad = () => {
    setLoading(true); // Initially, set loading to true to display loading state
    console.log("Image loaded");

    // Delay hiding the loading spinner for 2 seconds
    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 200); // 2000 milliseconds = 2 seconds
  };

  useEffect(() => {
    // Disable scrolling when loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Scroll to top of the page
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling after loading
    }

    return () => {
      // Clean up when component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  useEffect(() => {
    // Set `isLoaded` to true after the component mounts
    setIsLoaded(true);
  }, []); // The empty dependency array ensures this runs only once
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <div>
      {isLoading && (
        <div
          className={`flex justify-center items-center min-h-screen bg-black absolute inset-0 z-10  `}
        >
          <Image
            src="/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="ml-2 animate-spin"
          />
        </div>
      )}
      <div className="inset-0 bg-gradient-to-b from-white/10 max-md:from-white/10 to-black">
        <section className="fixed w-full z-10">
          <Navbar state={true} />
        </section>
        <div
          className={`pt-28 flex flex-col w-full items-center justify-center px-9 ${
            isLoaded ? "animate-slideUp" : ""
          }`}
        >
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start w-full gap-3">
                <div className="w-2 h-2 rounded-full bg-white "></div>
                <p className="text-white">About Me</p>
              </div>
              <p className="text-4xl md:text-5xl text-shadow min-w-[20rem] max-w-[65rem] text-white">
                I&apos; m passionate about creating beautiful application that
                empower people.
              </p>
            </div>
            <InfoDetails onImageLoad={onImageLoad} />

            <div className="flex flex-col items-start w-full mt-20 border-t-2 border-grayAlt3  xl:w-[70rem]">
              <div className="flex items-center gap-3 mt-12">
                <div className="w-3 h-3 rounded-full bg-white blur-[1px]"></div>
                <p className="text-sm text-grayAlt2 md:text-sm">EXPERIENCE</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full md:flex-row md:justify-between text-white ">
              <h1 className="text-3xl">Hyundai Elevator</h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl">Power Engineer Assistant</h1>
                  <p>07/&apos;24 - 08/&apos;24</p>
                </div>
                <p className="max-w-md">
                  i assisted engineers in doing in-depth research on specific
                  microcontroller boards to support the development and
                  optimization of elevator inverter systems.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 w-full md:flex-row md:justify-between mt-10  ">
              <h1 className="text-3xl text-white">Daewoong Pharmaceutical</h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl text-white">
                    Mobile App Planning and Service Strategy
                  </h1>
                  <p>10/&apos;23 - 02/&apos;24</p>
                </div>
                <p className="max-w-md text-white">
                  i developed strategy and roadmap for the global version of the
                  company&apos;s healthcare app, designed wireframes, and
                  conducted comprehensive UX research to align the app with the
                  needs of international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-28 pb-14 ">
        <div>
          <div className="w-[100vw] h-[0.1rem] bg-def"></div>
          <div className="flex justify-center w-full ">
            <div className="w-[69rem] px-7 ">
              <div className="flex flex-col mt-5 gap-14 ">
                {/* px-7 */}
                <div className="grid grid-rows-3 grid-cols-2 gap-y-7 gap-x-16 w-full max-w-md  ">
                  <h1 className="text-sm text-grayAlt3 ">Main</h1>
                  <h1 className="text-sm text-grayAlt3">Contact</h1>
                  <Link href="/" className="text-white">
                    Work
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/edward-cahyadi11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    LinkedIn
                  </Link>
                  <button className="flex text-white" onClick={scrollToTop}>
                    Info
                  </button>
                  <Link
                    href="https://drive.google.com/file/d/1nMY-231EWsDOCURxFRXZ7790kWww5dmB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Resume
                  </Link>
                </div>
                <div className="flex flex-col gap-2 text-base text-white">
                  <p>© 2024 Edward Cahyadi. All Rights Reserved.</p>
                  <p className="text-sm text-grayAlt3">
                    Made with love and Mango Green teas (50% sugar, less ice).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
