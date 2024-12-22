"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import DetailCard from "@/components/DetailCard";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type projectData = {
  imgMain: StaticImageData;
  descriptionTitle: string;
  link: string;
  descriptionSmallTitle: string;
  role: string;
  descriptionRole: string;
  team: string[];
  stacks: string;
  Overview: string;
  detailCard: string;
  titleCard: string;
  imageCard: StaticImageData[];
  explanation: {
    context: string;
    explanationTitle: string;
    explanationSubTitle: string;
    explanationDetail: string;
    explanationImg: StaticImageData;
    explanationImgDetail: string;
  }[];
};

const Journal = (projectData: projectData) => {
  const [isLoading, setLoading] = useState(true); // State to track loading
  // Function to handle image load

  const onImageLoad = () => {
    setLoading(true); // Initially, set loading to true to display loading state
    console.log("Image loaded");

    // Delay hiding the loading spinner for 2 seconds
    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 200); // 2000 milliseconds = 2 seconds
  };

  useEffect(() => {
    // Disable scrolling when loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Scroll to top of the page
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling after loading
    }

    return () => {
      // Clean up when component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);
  return (
    <div>
      {/* Show loading until the image is loaded */}
      {isLoading && (
        <div
          className={`flex justify-center items-center min-h-screen bg-black absolute inset-0 z-10  `}
        >
          <Image
            src="/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="ml-2 animate-spin"
          />
        </div>
      )}
      <div className="px-2 py-5 sm:p-8 bg-gradient-to-b from-white/10 via-black to-black">
        <div className={`${isLoading ? "hidden" : ""}`}>
          <Button />
        </div>
        <div
          className={`flex flex-col gap-4 items-center ${
            !isLoading ? "animate-slideUp" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center pt-14 gap-4">
            <h1 className="text-shadow text-4xl xl:text-6xl text-white">
              {projectData.descriptionTitle}
            </h1>
            <Link
              href={projectData.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-lg xl:text-xl text-grayAlt2 hover:text-shadow hover:text-white transition-all"
            >
              {projectData.descriptionSmallTitle}
            </Link>
          </div>
          <Image
            src={projectData.imgMain}
            width={1200}
            height={1200}
            alt="image"
            className="mt-10 "
            onLoad={onImageLoad}
          ></Image>
          <div className="flex px-4 justify-center items-center min-[1001px]:hidden">
            <div className="flex flex-col gap-8 justify-center items-start">
              <div className="flex flex-col gap-2">
                <p>My Role</p>
                <p className="md:text-lg text-grayAlt2">
                  <span className="text-white">{projectData.role} </span>
                  {projectData.descriptionRole}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Team</p>
                {projectData.team.map((name, index) => (
                  <p className="md:text-lg text-grayAlt2" key={index}>
                    {name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p>Tech stacks</p>
                <p className="md:text-lg text-grayAlt2">{projectData.stacks}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Overview</p>
                <p className="md:text-lg text-grayAlt2">
                  {projectData.Overview}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start gap-40 md:gap-16 max-[1001px]:hidden">
            <div className="flex flex-col gap-8">
              <div className="w-[25em]">
                <p>My Role</p>
                <p className="text-lg text-grayAlt2">
                  <span className="text-white">{projectData.role} </span>
                  {projectData.descriptionRole}
                </p>
              </div>
              <div className="text-lg">
                <p>Team</p>
                {projectData.team.map((name, index) => (
                  <p className=" text-grayAlt2" key={index}>
                    {name}
                  </p>
                ))}
              </div>
              <div className="text-lg">
                <p>Tech Stacks</p>
                <p className="text-grayAlt2">{projectData.stacks}</p>
              </div>
            </div>
            <div className="w-[30rem] text-lg ">
              <p>Overview</p>
              <p className="text-lg text-grayAlt2 ">{projectData.Overview}</p>
            </div>
          </div>
          <DetailCard {...projectData} />
        </div>
      </div>

      <section className="pt-20 md:pt-28 pb-14 relative">
        <div className="w-[100vw] h-[0.1rem] bg-def"></div>
        <div className="flex justify-center w-full ">
          <div className="w-[69rem] px-10 ">
            <div className="flex flex-col mt-5 gap-14 ">
              {/* px-7 */}
              <div className="grid grid-rows-3 grid-cols-2 gap-y-7 gap-x-16 w-full max-w-md  ">
                <h1 className="text-sm text-grayAlt3 ">Main</h1>
                <h1 className="text-sm text-grayAlt3">Contact</h1>
                <Link className="flex text-white" href="/">
                  Work
                </Link>
                <Link
                  href="https://www.linkedin.com/in/edward-cahyadi11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  LinkedIn
                </Link>
                <Link href="/info" className="text-white">
                  Info
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1nMY-231EWsDOCURxFRXZ7790kWww5dmB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Resume
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-base text-white">
                <p>© 2024 Edward Cahyadi. All Rights Reserved.</p>
                <p className="text-sm text-grayAlt3">
                  Made with love and Mango Green teas (50% sugar, less ice).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
