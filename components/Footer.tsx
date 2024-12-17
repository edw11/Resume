"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <div className="w-[100vw] h-[0.1rem] bg-def"></div>
      <div className="flex justify-center">
        <div className="w-[69rem] justify-start">
          <div className="flex flex-col mt-5 gap-14 px-7">
            <div className="grid grid-rows-3 grid-cols-2 gap-y-7 gap-x-16 w-full max-w-md ">
              <h1 className="text-sm text-grayAlt3 ">Main</h1>
              <h1 className="text-sm text-grayAlt3">Contact</h1>
              <button className="flex" onClick={scrollToTop}>
                Work
              </button>
              <Link href="/">LinkedIn</Link>
              <Link href="/">Info</Link>
              <Link href="/">Resume</Link>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <p>© 2024 Edward Cahyadi. All Rights Reserved.</p>
              <p className="text-sm text-grayAlt3">
                Made with love and Mango Green teas (50% sugar, less ice).
              </p>
            </div>
            <p className="text-grayAlt3 text-custom">
              Last Updated by Edward on December 17,2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
