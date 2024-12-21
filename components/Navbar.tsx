"use client";
import Image from "next/image";
import Slide from "./Slide";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ state }: { state: boolean }) => {
  const [click, setClicked] = useState(false);
  const change = () => {
    setClicked(!click);
  };
  return (
    <>
      <header className="z-50 flex items-center py-6 px-7 lg:justify-between xl:px-14">
        <div className=" max-md:hidden max-lg:w-full ">
          <p className="text-white font-bold text-base xl:text-lg">
            Edward Cahyadi
          </p>
          <p className="text-sm text-gray-400 xl:text-base">
            Software Developer
          </p>
        </div>
        <div className="flex md:gap-4 w-full md:justify-end justify-between lg:hidden ">
          <Slide state={state} />

          <div className="relative">
            <div
              className="flex flex-col relative  justify-center p-4 glass rounded-full border-[#363636] border-[1px] cursor-pointer "
              onClick={change}
            >
              <Image
                src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644c8981f87a7036b4c7fa64_icon-%40.svg"
                alt="@"
                width={22}
                height={22}
                className={`transition-opacity duration-1000 absolute select-none ${
                  click ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
              />
              <Image
                src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/645a01ff46a1cf3d85d90049_icon-close.svg"
                alt="close"
                width={22}
                height={22}
                className={`transition-opacity duration-1000 select-none  ${
                  !click ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
              />
            </div>
            <div
              className={`absolute glass py-8 px-8 flex flex-col gap-6 rounded-xl right-0 top-[4.3rem]  transition-all duration-800 ease-in-out  ${
                click
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              <div className="flex  w-28 justify-between">
                <p className="text-white">Linkedin</p>
                <Image
                  src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex w-28 justify-between">
                <p className="text-white">Resume</p>
                <Image
                  src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden">
          <Slide state={state} />
        </div>

        <div className="flex gap-5 text-sm max-lg:hidden">
          <div className="flex gap-2 hover:text-shadow">
            <Link
              href="https://www.linkedin.com/in/edward-cahyadi11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
          </div>
          <div className="flex gap-2 hover:text-shadow">
            <Link
              href="https://drive.google.com/file/d/1nMY-231EWsDOCURxFRXZ7790kWww5dmB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
