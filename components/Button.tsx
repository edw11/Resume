"use client";
import Link from "next/link";
import React, { useState } from "react";

const Button = () => {
  const [isHover, setHover] = useState(false);
  const change = () => {
    setHover(!isHover);
  };
  return (
    <div className="fixed z-20">
      <Link
        className="py-2 pr-5 pl-3 glass rounded-full flex items-center gap-3 hover:text-shadow hover:bg-white/10 transition-all duration-500 text-white"
        onMouseEnter={change}
        onMouseLeave={change}
        href={"/"}
        aria-label="Back to home"
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          className={`transition-all duration-500 ${
            isHover ? "translate-x-0" : "translate-x-[0.3rem]"
          }`}
        >
          <path d="M19 12H5M5 12L12 19M5 12L12 5" />
        </svg>
        Back
      </Link>
    </div>
  );
};

export default Button;
