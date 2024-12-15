"use client";
import Link from "next/link";
import { useState } from "react";

const Slide = () => {
  const [choose, setChoose] = useState(false);
  const change = () => {
    choose ? setChoose(false) : setChoose(true);
  };
  return (
    <div className="flex sticky w-auto h-auto bg-dark_grey px-3 py-2 rounded-full text-sm border-[#363636] border-[1.8px] ">
      <div
        className={`bg-def w-20 h-8 absolute top-[0.6rem]  z-0 rounded-full transition-all duration-300 ${
          choose ? "ml-[4.7rem] transition-all duration-300" : ""
        }`}
      ></div>
      <div
        className=" text-white text-center px-6 py-2 rounded-2xl z-10"
        onClick={
          !choose
            ? () => {
                setChoose(false);
              }
            : change
        }
      >
        <Link
          href="/"
          className={` text-sm text-white ${!choose ? "text-shadow" : ""} `}
        >
          Work
        </Link>
      </div>
      <div
        className=" text-white  text-center px-6 py-2 rounded-2xl z-10"
        onClick={
          choose
            ? () => {
                setChoose(true);
              }
            : change
        }
      >
        <Link
          href="/"
          className={` text-sm text-white ${choose ? "text-shadow" : ""} `}
        >
          Info
        </Link>
      </div>
    </div>
  );
};

export default Slide;
