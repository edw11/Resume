import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/image";
import type { SanityAboutSection } from "@/sanity/types";

interface InfoDetailsProps {
  onImageLoad?: () => void;
  aboutSections: SanityAboutSection[];
}

const InfoDetails: React.FC<InfoDetailsProps> = ({ onImageLoad, aboutSections }) => {
  const section1 = aboutSections?.[0];
  const section2 = aboutSections?.[1];

  return (
    <div>
      {/* Desktop layout */}
      <div className="flex  w-full gap-10 mt-10 max-md:hidden">
        {section1 && (
          <div className="flex flex-col items-start gap-5">
            {section1.image && (
              <div className="p-2 bg-def rounded-md min-w-[300px] max-w-[500px]">
                <Image
                  src={urlFor(section1.image).width(500).url()}
                  width={500}
                  height={500}
                  alt={section1.heading || "about image"}
                  className="rounded-md transition-transform duration-500 hover:scale-[1.02]"
                  onLoad={onImageLoad}
                />
              </div>
            )}
            <div className="flex flex-col gap-5">
              <p className="text-white text-lg">{section1.heading}</p>
              <p className="max-w-lg text-grayAlt2">{section1.paragraph}</p>
            </div>
          </div>
        )}

        {section2 && (
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-5 ">
              <p className="text-lg text-white">{section2.heading}</p>
              <p className="max-w-lg text-grayAlt2">{section2.paragraph}</p>
              {section2.image && (
                <div className="p-2 bg-def rounded-md min-w-[350px] max-w-[500px]">
                  <Image
                    src={urlFor(section2.image).width(500).url()}
                    width={500}
                    height={500}
                    alt={section2.heading || "about image"}
                    className="rounded-md transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col w-full gap-10 mt-10 md:hidden">
        {section1 && (
          <div className="flex flex-col items-start gap-5">
            {section1.image && (
              <div className="p-2 bg-def rounded-md min-w-[300px] max-w-[500px]">
                <Image
                  src={urlFor(section1.image).width(500).url()}
                  width={500}
                  height={500}
                  alt={section1.heading || "about image"}
                  className="rounded-md transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="flex flex-col gap-5">
              <p className="text-lg text-white">{section2?.heading}</p>
              <p className="max-w-lg text-grayAlt2">{section2?.paragraph}</p>
            </div>
          </div>
        )}

        {section2 && (
          <div className="flex flex-col items-start gap-5">
            {section2.image && (
              <div className="p-2 bg-def rounded-md min-w-[300px] max-w-[500px]">
                <Image
                  src={urlFor(section2.image).width(500).url()}
                  width={500}
                  height={500}
                  alt={section2.heading || "about image"}
                  className="rounded-md transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="flex flex-col gap-5">
              <p className="text-lg text-white">{section1?.heading}</p>
              <p className="max-w-lg text-grayAlt2">{section1?.paragraph}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDetails;
