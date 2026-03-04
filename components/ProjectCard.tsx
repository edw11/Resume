"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { urlFor } from "@/sanity/image";
import type { SanityProject } from "@/sanity/types";

declare module "react" {
  interface CSSProperties {
    "--gradient-start"?: string;
    "--gradient-end"?: string;
  }
}

const ProjectCard = ({
  project,
  index,
}: {
  project: SanityProject;
  index: number;
}) => {
  const [isHover, setHover] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const change = () => {
    setHover(!isHover);
  };

  const gradientStyles: React.CSSProperties = {
    "--gradient-start": project.colorStart,
    "--gradient-end": project.colorEnd,
  };

  const route = `/projects/${project.slug.current}`;

  return (
    <div
      ref={ref}
      className={`bg-dark_grey border border-white/10 px-2 pt-2 rounded-xl mt-10 ${isVisible ? "animate-fadeUp" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
    >
      <Link href={route}>
        <div
          className={`flex-col flex grad px-7   pt-6 rounded-lg xl:w-[69rem] gap-14 max-sm:gap-10 justify-evenly active:scale-[0.98] transition-transform duration-200`}
          onMouseEnter={change}
          onMouseLeave={change}
          style={gradientStyles}
        >
          <div className="flex justify-between items-center  ">
            <div className="flex flex-col gap-2 ">
              <p className="text-xl md:text-2xl text-white">
                {project.bigTitle}
              </p>
              <p className="text-base text-white">
                {project.title}{" "}
                <span className="text-base font-medium text-grayAlt2">
                  — {project.description}
                </span>
              </p>
            </div>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              className={`md:w-[40px] md:h-[40px] transition-all duration-300 ${
                isHover ? "xl:translate-x-3" : "xl:translate-x-0"
              }`}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
          <div className="w-full justify-center flex overflow-hidden ">
            <Image
              src={urlFor(project.imgURL).width(800).url()}
              width={800}
              height={800}
              alt={project.bigTitle || "project image"}
              className={`transition-all duration-500   max-lg:w-[700px] ${
                isHover ? "xl:translate-y-0" : "xl:translate-y-8"
              }`}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
