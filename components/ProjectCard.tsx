"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type data = {
  imgURL: StaticImageData;
  bigTitle: string;
  title: string;
  description: string;
  colorStart: string;
  colorEnd: string;
  id: number;
};
declare module "react" {
  interface CSSProperties {
    "--gradient-start"?: string;
    "--gradient-end"?: string;
  }
}

const ProjectCard = (product: data) => {
  const [isHover, setHover] = useState(false);

  const change = () => {
    setHover(!isHover);
  };
  const gradientStartColor = product.colorStart; // Example of dynamic start color
  const gradientEndColor = product.colorEnd; // Example of dynamic end color

  // Dynamically set the CSS variables
  const gradientStyles: React.CSSProperties = {
    "--gradient-start": gradientStartColor,
    "--gradient-end": gradientEndColor,
  };

  const route = "/projects/" + product.id;

  return (
    <div className="bg-dark_grey border-white border-2 border-opacity-10 border-solid px-2 pt-2 rounded-xl mt-10">
      <Link href={route}>
        <div
          className={`flex-col flex grad px-7 pt-6 rounded-lg xl:w-[65rem] gap-14 justify-evenly `}
          onMouseEnter={change}
          onMouseLeave={change}
          style={gradientStyles}
        >
          <div className="flex justify-between items-center  ">
            <div className="flex flex-col gap-2 ">
              <p className="text-2xl text-whiteAlt2">{product.bigTitle}</p>
              <p className="text-base text-whiteAlt">
                {product.title}{" "}
                <span className="text-base font-medium text-grayAlt">
                  — {product.description}
                </span>
              </p>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg"
              width={30}
              height={30}
              alt="arrow"
              className={`md:w-[40px] md:h-[40px] transition-all duration-700 ${
                isHover ? "xl:translate-x-3" : "xl:translate-x-0"
              }`}
            />
          </div>
          <div className="w-full justify-center flex overflow-hidden ">
            <Image
              src={product.imgURL}
              width={800}
              height={800}
              alt="stadia"
              className={`transition-all duration-500 rounded-xl max-lg:w-[700px] ${
                isHover ? "xl:translate-y-0" : "xl:translate-y-8"
              }`}
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
