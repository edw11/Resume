"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import DetailCard from "@/components/DetailCard";
import Footer from "@/components/Footer";
import Image, { StaticImageData } from "next/image";

type projectData = {
  descriptionTitle: string;
  descriptionSmallTitle: string;
  role: string;
  descriptionRole: string;
  team: string[];
  timeline: string;
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
    }, 500); // 2000 milliseconds = 2 seconds
  };
  return (
    <div>
      {/* Show loading until the image is loaded */}
      {isLoading && (
        <div
          className={`flex justify-center items-center min-h-screen bg-black absolute inset-0 z-10`}
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
      <div className="p-8 bg-gradient-to-b from-white/15 to-black">
        <div className={`${isLoading ? "hidden" : ""}`}>
          <Button />
        </div>
        <div
          className={`flex flex-col gap-4 items-center ${
            !isLoading ? "animate-slideUp" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center pt-14 gap-4">
            <h1 className="text-shadow text-4xl xl:text-6xl">
              {projectData.descriptionTitle}
            </h1>
            <p className="text-lg xl:text-lg text-grayAlt2">
              {projectData.descriptionSmallTitle}
            </p>
          </div>
          <Image
            src="/images/spotlight.png"
            width={1300}
            height={1300}
            alt="spotlight"
            className="mt-10"
            onLoad={onImageLoad}
          ></Image>
          <div className="flex justify-center items-center min-[1001px]:hidden">
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
                <p>Timeline & Result</p>
                <p className="md:text-lg text-grayAlt2">
                  {projectData.timeline}
                </p>
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
                <p>Timeline & Result</p>
                <p className="text-grayAlt2">{projectData.timeline}</p>
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
      )
      <section className="pt-28 pb-14 relative">
        <Footer />
      </section>
    </div>
  );
};

export default Journal;
