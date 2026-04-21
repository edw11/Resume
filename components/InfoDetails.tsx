import React from "react";
import type { SanityAboutSection } from "@/sanity/types";

interface InfoDetailsProps {
  aboutSections: SanityAboutSection[];
}

const InfoDetails: React.FC<InfoDetailsProps> = ({ aboutSections }) => {
  const section1 = aboutSections?.[0];
  const section2 = aboutSections?.[1];

  return (
    <div>
      {/* Desktop layout */}
      <div className="flex  w-full gap-10 mt-10 max-md:hidden">
        {section1 && (
          <div className="flex flex-col items-start gap-5">
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
            </div>
          </div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col w-full gap-10 mt-10 md:hidden">
        {section1 && (
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-5">
              <p className="text-lg text-white">{section1.heading}</p>
              <p className="max-w-lg text-grayAlt2">{section1.paragraph}</p>
            </div>
          </div>
        )}

        {section2 && (
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-5">
              <p className="text-lg text-white">{section2.heading}</p>
              <p className="max-w-lg text-grayAlt2">{section2.paragraph}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDetails;
