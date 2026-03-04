import Image from "next/image";
import React from "react";
import ScrollRevealWrapper from "./ScrollRevealWrapper";
import { urlFor } from "@/sanity/image";
import type { SanityImage, SanityExplanation } from "@/sanity/types";

type data = {
  detailCard: string;
  titleCard: string;
  imageCard: SanityImage[];
  explanation: SanityExplanation[];
};

const DetailCard = (props: data) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {props.imageCard && props.imageCard.length !== 0 ? (
        <div className="bg-dark_grey w-full border border-white/10 px-2 pt-2 rounded-2xl mt-24">
          <div
            className={`flex-col flex px-4 md:px-7 pt-6 rounded-lg gap-5 md:gap-14 `}
          >
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-3 items-center">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-scaleIn"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <p className="text-grayAlt2 text-base">{props.detailCard}</p>
                </div>

                <p className="text-base md:text-2xl max-w-[50rem]  text-whiteAlt2 text-center">
                  {props.titleCard}
                </p>
              </div>
            </div>
            <div className="w-full justify-center items-center flex flex-col ">
              {props.imageCard.map((img, index) => (
                <Image
                  key={index}
                  src={urlFor(img).width(1000).url()}
                  width={1000}
                  height={1000}
                  className="mt-8 sm:mt-14"
                  alt="project highlight"
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {props.explanation?.map((explanation, index) => (
        <ScrollRevealWrapper key={explanation._key || index}>
          <div className="px-4">
            <div className="flex flex-col items-start mt-20 border-t-2 border-grayAlt3 gap-5 md:gap-14 xl:w-[70rem]">
              <div className="flex flex-col gap-5 md:gap-10">
                <div className="flex items-center gap-3 mt-10 md:mt-20">
                  <div className="w-3 h-3 rounded-full bg-white blur-[1px]"></div>
                  <p className="text-xs text-grayAlt2 md:text-sm uppercase tracking-[0.15em]">
                    {explanation.context}
                  </p>
                </div>
                <h1 className="text-3xl text-white">
                  {explanation.explanationTitle}
                </h1>
              </div>

              <div className="flex justify-center items-start max-md:flex-col max-md:gap-5 text-white">
                <h2 className="text-xl xl:text-2xl w-full">
                  {explanation.explanationSubTitle}
                </h2>
                <p className="text-grayAlt2 text-md xl:text-xl w-full ">
                  {explanation.explanationDetail}
                </p>
              </div>
              <div className="flex justify-center w-full mt-6">
                <div className="flex flex-col items-end gap-2">
                  <Image
                    src={urlFor(explanation.explanationImg).width(1000).url()}
                    width={1000}
                    height={1000}
                    alt={explanation.explanationImgDetail || "explanation image"}
                    className="rounded-lg transition-transform duration-500 hover:scale-[1.01]"
                  />
                  <p className="text-xs text-grayAlt2 md:text-sm">
                    {explanation.explanationImgDetail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollRevealWrapper>
      ))}
    </div>
  );
};

export default DetailCard;
