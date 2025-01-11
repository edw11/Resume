"use client";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <div>
      <div className="w-[100vw] h-[0.1rem] bg-def"></div>
      <div className="flex justify-center w-full ">
        <div className="w-[69rem] px-7 md:px-16 lg:px-32 xl:px-0 ">
          <div className="flex flex-col mt-5 gap-14 ">
            {/* px-7 */}
            <div className="grid grid-rows-3 grid-cols-2 gap-y-7 gap-x-16 w-full max-w-md  ">
              <h1 className="text-sm text-grayAlt3 ">Main</h1>
              <h1 className="text-sm text-grayAlt3">Contact</h1>
              <button className="flex text-white" onClick={scrollToTop}>
                Work
              </button>
              <Link
                href="https://www.linkedin.com/in/edward-cahyadi11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                LinkedIn
              </Link>
              <Link href="/info" className="text-white">
                Info
              </Link>
              <Link
                href="https://drive.google.com/file/d/1nMY-231EWsDOCURxFRXZ7790kWww5dmB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Resume
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <p className="text-white">
                © 2025 Edward Cahyadi. All Rights Reserved.
              </p>
              <p className="text-sm text-grayAlt3">
                This portfolio was made with React, Next.js, and Tailwind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
