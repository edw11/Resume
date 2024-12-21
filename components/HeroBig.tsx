import { useEffect, useState } from "react";

const HeroBig = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Set `isLoaded` to true after the component mounts
    setIsLoaded(true);
  }, []); // The empty dependency array ensures this runs only once
  return (
    <div
      className={`relative w-[65rem] lg:w-[55rem] xl:w-[69rem] md:w-[45rem]  ${
        isLoaded ? "animate-slideUp" : ""
      }`}
    >
      <div
        className="relative flex flex-col h-[35rem] lg:h-[47rem] bg-custom-radial-gradient bg-contain  rounded-t-xl before:bg-gradient-to-b before:from-white/5 before:to-default/40 before:inset-0 before:absolute 
      before:-m-[1px] before:rounded-t-xl before:-z-10 "
      >
        <div className=" bg-custom-radial-gradient bg-white bg-opacity-20 w-full h-10 flex justify-start items-center  rounded-t-xl ">
          <div className="flex gap-3 px-5 py-6">
            <div className="bg-[#FF553F] w-3 h-3 rounded-full blur-[0.7px] hover:shadow-[0_0_10px_5px_rgba(255,85,63,0.6)] transition-shadow duration-300"></div>
            <div className="bg-[#F4BD4F] w-3 h-3 rounded-full blur-[0.7px]  hover:shadow-[0_0_10px_5px_rgba(244,189,79,0.6)] transition-shadow duration-300"></div>
            <div className="bg-[#57C353] w-3 h-3 rounded-full blur-[0.7px] hover:shadow-[0_0_10px_5px_rgba(87,195,83,0.6)] transition-shadow duration-300"></div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-12 justify-center items-start lg:items-end h-full px-20 lg:px-26">
          <h1 className="text-7xl max-[900px]:text-6xl max-[768px]:text-5xl  xl:text-8xl lg:text-8xl">
            <span className="text-white text-shadow">
              I develop responsive apps &
            </span>{" "}
            <span className="bg-gradient-to-b italic font-title  from-white via-white to-black text-transparent bg-clip-text">
              Interactive UI.
            </span>
          </h1>
          <div className="flex flex-col ">
            <p className="text-white text-xl xl:text-2xl">
              Software Engineeer. Based in Seoul.
            </p>
            <p className=" text-gray-400 text-lg xl:text-xl">
              Focusing on Web Development
            </p>
          </div>
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 48 48"
              className="animate-bounce-color"
              fill="white" // Default color
            >
              <path d="M24 44L10 30L12.1 27.9L22.5 38.3V4H25.5V38.3L35.9 27.9L38 30L24 44Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBig;
