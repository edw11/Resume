"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Slide = () => {
  const [choose, setChoose] = useState<boolean | undefined>(undefined);

  const change = () => {
    setChoose(!choose);
  };

  useEffect(() => {
    if (window.localStorage.getItem("slide") !== "undefined") {
      const savedData = window.localStorage.getItem("slide");
      if (savedData !== null) {
        setChoose(JSON.parse(savedData)); // Update state based on localStorage
      } else {
        setChoose(false); // Default to false if no data in localStorage
      }
    } else setChoose(false);
  }, []); // Run this effect only once after the component mounts

  useEffect(() => {
    if (choose !== undefined && typeof window !== "undefined") {
      window.localStorage.setItem("slide", JSON.stringify(choose));
    }
  }, [choose]); // This effect runs whenever `choose` changes

  // Render a loading state while the initial state is being fetched
  if (choose === undefined) {
    return <div></div>; // You can replace this with a more appropriate loading UI
  }

  return (
    <div className="flex relative w-auto h-auto glass px-3 py-2 rounded-full text-sm border-[#363636] border-[1px]">
      <div
        className={`glass w-20 h-9 absolute top-[0.5rem]  z-0 rounded-full transition-all duration-300 ${
          choose ? "ml-[4.7rem] transition-all duration-300 " : ""
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
