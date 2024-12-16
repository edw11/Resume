const HeroSmall = () => {
  return (
    <div className="flex flex-col justify-center  items-start gap-9 ">
      <p className=" text-base text-gray-300 ">
        Edward Cahyadi — Software Developer
      </p>
      <h1 className="text-5xl">
        <span className="text-white text-shadow">
          I develop apps, interactions &
        </span>{" "}
        <span className="bg-gradient-to-b italic font-title  from-white via-white to-black text-transparent bg-clip-text">
          stories.
        </span>
      </h1>
      <div className="flex flex-col ">
        <p className="text-white text-lg">
          Software Engineeer. Based in Seoul.
        </p>
        <p className="text-base text-gray-400">Focusing on Web Development</p>
      </div>
      <div className="w-[100vw] h-[0.1rem] bg-def -mx-8"></div>
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 48 48"
          className="animate-bounce-color"
          fill="white" // Default color
        >
          <path d="M24 44L10 30L12.1 27.9L22.5 38.3V4H25.5V38.3L35.9 27.9L38 30L24 44Z" />
        </svg>
        <p className="text-grayAlt2">Explore More</p>
      </div>
    </div>
  );
};

export default HeroSmall;
