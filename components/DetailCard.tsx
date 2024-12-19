import Image, { StaticImageData } from "next/image";
import React from "react";
interface explanationType {
  context: string;
  explanationTitle: string;
  explanationSubTitle: string;
  explanationDetail: string;
  explanationImg: StaticImageData;
  explanationImgDetail: string;
}
type data = {
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
  explanation: explanationType[];
};

const DetailCard = (props: data) => {
  return (
    <div>
      <div className="bg-dark_grey border-white border-2 border-opacity-10 border-solid px-2 pt-2 rounded-2xl mt-24">
        <div
          className={`flex-col flex  px-7 pt-6 rounded-lg xl:w-[70rem] gap-14 justify-evenly `}
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col gap-3 items-center">
                <Image
                  src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643c53af931a3ba99ceedfbf_icon-highlights.svg"
                  width={40}
                  height={40}
                  alt="logo"
                ></Image>
                <p className="text-grayAlt2 text-base">{props.detailCard}</p>
              </div>

              <p className="text-base md:text-2xl md:w-[45rem] text-whiteAlt2 text-center">
                {props.titleCard}
              </p>
            </div>
          </div>

          <div className="w-full justify-center items-center flex flex-col ">
            {props.imageCard.map((img, index) => (
              <Image
                key={index}
                src={img}
                width={800}
                height={800}
                alt="stadia"
              ></Image>
            ))}
          </div>
          {/* Context section */}
        </div>
      </div>
      {props.explanation.map((explanation, index) => (
        <div
          key={index}
          className="flex flex-col items-start mt-20 border-t-2 border-grayAlt3 gap-14 xl:w-[70rem]"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3 mt-20">
              <div className="w-3 h-3 rounded-full bg-white blur-[1px]"></div>
              <p className="text-xs text-grayAlt2 md:text-sm">
                {explanation.context}
              </p>
            </div>
            <h1 className="text-3xl">{explanation.explanationTitle}</h1>
          </div>

          <div className="flex justify-center items-start max-md:flex-col max-md:gap-5">
            <h2 className="text-2xl w-full">{explanation.explanationTitle}</h2>
            <p className="text-grayAlt2 text-sm xl:text-xl ">
              {explanation.explanationDetail}
            </p>
          </div>
          <div className="flex justify-center w-full mt-6">
            <div className="flex flex-col items-end gap-2">
              <Image
                src={explanation.explanationImg}
                width={1000}
                height={1000}
                alt="stadia"
                className="rounded-lg"
              ></Image>
              <p className="text-xs text-grayAlt2 md:text-sm">
                {explanation.explanationImgDetail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailCard;
