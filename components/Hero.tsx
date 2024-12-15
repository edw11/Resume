"use client";
import Image from "next/image";
import HeroSmall from "./HeroSmall";
import HeroBig from "./HeroBig";

const Hero = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/3 max-sm:from-white/10 to-black z-[-1] ">
        <Image
          src="/images/noise.png" // Replace with your actual background image URL
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10 md:hidden"
        />
      </div>
      <div className="px-8">
        <div className="md:hidden py-6">
          <HeroSmall />
        </div>
        <div className="max-md:hidden  flex justify-center">
          <HeroBig />
        </div>
      </div>
    </div>
  );
};

export default Hero;
