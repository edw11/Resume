import type { SanitySiteSettings } from "@/sanity/types";

const HeroSmall = ({ settings }: { settings: SanitySiteSettings }) => {
  return (
    <div className="flex flex-col justify-center  items-start gap-9 ">
      <p className=" text-base text-grayAlt2 ">
        {settings.name} — {settings.jobTitle}
      </p>
      <h1 className="text-5xl">
        <span className="text-white text-shadow">
          {settings.heroHeadingMobile}
        </span>{" "}
        <span className="bg-gradient-to-b italic font-title  from-white via-white to-black text-transparent bg-clip-text">
          {settings.heroHeadingMobileItalic}
        </span>
      </h1>
      <div className="flex flex-col ">
        <p className="text-white text-lg">
          {settings.jobTitle}. Based in {settings.location}.
        </p>
        <p className="text-base text-grayAlt2">Focusing on {settings.focus}</p>
      </div>
      <div className="w-full h-px bg-def"></div>
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 48 48"
          className="animate-bounce-color"
          fill="white"
        >
          <path d="M24 44L10 30L12.1 27.9L22.5 38.3V4H25.5V38.3L35.9 27.9L38 30L24 44Z" />
        </svg>
        <p className="text-grayAlt2">Explore More</p>
      </div>
    </div>
  );
};

export default HeroSmall;
