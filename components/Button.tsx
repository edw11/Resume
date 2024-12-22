"use client";
import Image from "next/image";
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
        className="py-2 pr-5 pl-3 glass rounded-full flex items-center gap-3 hover:text-shadow transition-all duration-500 text-white"
        onMouseEnter={change}
        onMouseLeave={change}
        href={"/"}
      >
        <Image
          src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/645b5e5d57552962d27c0020_icon-back-2.svg"
          width={20}
          height={20}
          alt="arrow"
          className={`transition-all duration-500 ${
            isHover ? "translate-x-0" : "translate-x-[0.3rem]"
          }`}
        />
        Back
      </Link>
    </div>
  );
};

export default Button;
