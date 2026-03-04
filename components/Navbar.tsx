"use client";
import Slide from "./Slide";
import Link from "next/link";
import { useState } from "react";
import type { SanityLinks } from "@/sanity/types";

const Navbar = ({ state, links }: { state: boolean; links: SanityLinks }) => {
  const [click, setClicked] = useState(false);
  const change = () => {
    setClicked(!click);
  };
  return (
    <>
      <header className="z-50 flex items-center py-6 px-7 max-sm:px-5 lg:justify-between xl:px-14">
        <div className=" max-md:hidden max-lg:w-full ">
          <p className="text-white font-bold text-base xl:text-lg">
            Edward Cahyadi
          </p>
          <p className="text-sm text-grayAlt2 xl:text-base">
            Software Developer
          </p>
        </div>
        <div className="flex md:gap-4 w-full md:justify-end justify-between lg:hidden ">
          <Slide state={state} />

          <div className="relative">
            <button
              className="flex flex-col relative justify-center p-4 glass rounded-full border-[#363636] border-[1px] cursor-pointer"
              onClick={change}
              aria-label={click ? "Close menu" : "Open menu"}
              aria-expanded={click}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                className={`transition-opacity duration-500 absolute select-none ${
                  click ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
              >
                <circle cx="12" cy="12" r="1" fill="white" />
                <circle cx="12" cy="5" r="1" fill="white" />
                <circle cx="12" cy="19" r="1" fill="white" />
              </svg>
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                className={`transition-opacity duration-500 select-none ${
                  !click ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className={`absolute glass py-8 px-8 flex flex-col gap-6 rounded-xl right-0 top-[4.3rem]  transition-all duration-800 ease-in-out  ${
                click
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex w-28 justify-between">
                  <p className="text-white transition-colors duration-300 hover:text-whiteAlt2">LinkedIn</p>
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex w-28 justify-between">
                  <p className="text-white transition-colors duration-300 hover:text-whiteAlt2">GitHub</p>
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
              <Link
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex w-28 justify-between">
                  <p className="text-white transition-colors duration-300 hover:text-whiteAlt2">Resume</p>
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden">
          <Slide state={state} />
        </div>

        <div className="flex gap-5 text-sm max-lg:hidden">
          <div className="flex gap-2">
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-whiteAlt2"
            >
              LinkedIn
            </Link>
          </div>
          <div className="flex gap-2">
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-whiteAlt2"
            >
              GitHub
            </Link>
          </div>
          <div className="flex gap-2">
            <Link
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-whiteAlt2"
            >
              Resume
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
