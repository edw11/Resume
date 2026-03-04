import Image from "next/image";
import HeroSmall from "./HeroSmall";
import HeroBig from "./HeroBig";
import type { SanitySiteSettings } from "@/sanity/types";

const Hero = ({ settings }: { settings: SanitySiteSettings }) => {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/3 max-md:from-white/10 to-black z-[-1] ">
        <Image
          src="/images/noise.png"
          alt="Background"
          fill
          className="object-cover opacity-10 md:hidden"
        />
      </div>
      <div className="px-7">
        <div className="md:hidden py-6">
          <HeroSmall settings={settings} />
        </div>
        <div className="max-md:hidden  flex justify-center">
          <HeroBig settings={settings} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
