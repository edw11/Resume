"use client";
import Link from "next/link";
import { useState } from "react";

const Slide = ({ state }: { state: boolean }) => {
  const [choose, setChoose] = useState<boolean>(state);

  const change = () => {
    setChoose(!choose);
  };

  return (
    <div className="flex relative w-auto h-auto glass px-3 py-2 rounded-full text-sm border-[#363636] border-[1px]">
      <div
        className={`glass w-20 h-9 absolute top-[0.5rem]  z-0 rounded-full transition-all duration-200 ${
          choose ? "ml-[4.6rem] transition-all duration-200 " : ""
        }`}
      ></div>
      <div
        className={`glass w-20 h-9 absolute top-[0.5rem]  z-0 rounded-full transition-all duration-300 hidden `}
      ></div>
      <div className=" text-white text-center px-6 py-2 rounded-2xl z-10">
        <Link
          href="/"
          className={` text-sm text-white ${!choose ? "text-shadow" : ""} `}
          onClick={
            !choose
              ? () => {
                  setChoose(false);
                }
              : change
          }
        >
          Work
        </Link>
      </div>
      <div className=" text-white  text-center px-6 py-2 rounded-2xl z-10">
        <Link
          href="/info"
          className={` text-sm text-white ${choose ? "text-shadow" : ""} `}
          onClick={
            choose
              ? () => {
                  setChoose(true);
                }
              : change
          }
        >
          Info
        </Link>
      </div>
    </div>
  );
};

export default Slide;
