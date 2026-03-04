"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import DetailCard from "@/components/DetailCard";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { SanityProjectDetail, SanityLinks } from "@/sanity/types";

type JournalProps = {
  project: SanityProjectDetail;
  links: SanityLinks;
  name: string;
  jobTitle: string;
};

const Journal = ({ project, links, name, jobTitle }: JournalProps) => {
  const [isLoading, setLoading] = useState(true);

  const onImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  const linkClass =
    "text-grayAlt2 transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-grayAlt2 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div>
      <div
        className={`flex justify-center items-center min-h-screen bg-black fixed inset-0 z-10 transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/icons/loader.svg"
          alt="loader"
          width={24}
          height={24}
          className="ml-2 animate-spin"
        />
      </div>
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
            <h1 className="text-shadow text-3xl xl:text-6xl text-white text-center">
              {project.descriptionTitle}
            </h1>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-lg xl:text-xl text-grayAlt2 hover:text-shadow hover:text-white transition-all"
            >
              {project.descriptionSmallTitle}
            </Link>
          </div>
          <Image
            src={urlFor(project.imgMain).width(1200).url()}
            width={1200}
            height={1200}
            alt={project.descriptionTitle || "project image"}
            className="mt-10 "
            onLoad={onImageLoad}
          />
          <div className="flex px-4 justify-center items-center min-[1001px]:hidden">
            <div className="flex flex-col gap-8 justify-center items-start">
              <div className="flex flex-col gap-2">
                <p className="text-white">My Role</p>
                <p className="md:text-lg text-grayAlt2">
                  <span className="text-white">{project.role} </span>
                  {project.descriptionRole}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white">Team</p>
                {project.team?.map((t, index) => (
                  <p className="md:text-lg text-grayAlt2" key={index}>
                    {t}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white">Tech stacks</p>
                <p className="md:text-lg text-grayAlt2">{project.stacks}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white">Overview</p>
                <p className="md:text-lg text-grayAlt2">
                  {project.overview}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start md:gap-16 xl:gap-60 max-[1001px]:hidden">
            <div className="flex flex-col gap-8">
              <div className="w-[25em]">
                <p className="text-white">My Role</p>
                <p className="text-lg text-grayAlt2">
                  <span className="text-white">{project.role} </span>
                  {project.descriptionRole}
                </p>
              </div>
              <div className="text-lg text-white">
                <p>Team</p>
                {project.team?.map((t, index) => (
                  <p className=" text-grayAlt2 " key={index}>
                    {t}
                  </p>
                ))}
              </div>
              <div className="text-lg text-white">
                <p className="text-white">Tech Stacks</p>
                <p className="text-grayAlt2">{project.stacks}</p>
              </div>
            </div>
            <div className="w-[30rem] text-lg text-white">
              <p>Overview</p>
              <p className="text-lg text-grayAlt2 ">{project.overview}</p>
            </div>
          </div>
          <DetailCard
            detailCard={project.detailCard}
            titleCard={project.titleCard}
            imageCard={project.imageCard || []}
            explanation={project.explanation || []}
          />
        </div>
      </div>

      <footer className="flex justify-center w-full">
        <div className="w-[69rem] px-7 md:px-10 xl:px-0 pt-20 md:pt-28 pb-14">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl text-white font-medium">{name}</h2>
              <p className="text-sm text-grayAlt3">{jobTitle}</p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <Link className={linkClass} href="/">
                Work
              </Link>
              <Link href="/info" className={linkClass}>
                Info
              </Link>
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </Link>
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                GitHub
              </Link>
              <Link
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Resume
              </Link>
              <Link
                href={`mailto:${links.email}`}
                className={linkClass}
              >
                Email
              </Link>
            </div>

            <div className="w-full h-px bg-def"></div>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-grayAlt2">
                © {new Date().getFullYear()} {name}. All Rights Reserved.
              </p>
              <p className="text-xs text-grayAlt3">
                Made with React, Next.js & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Journal;
