import Image from "next/image";
import React from "react";

interface InfoDetailsProps {
  onImageLoad?: () => void; // The prop is optional and is a function with no arguments and no return value
}

const InfoDetails: React.FC<InfoDetailsProps> = ({ onImageLoad }) => {
  return (
    <div>
      <div className="flex  w-full gap-10 mt-10 max-md:hidden">
        <div className="flex flex-col items-start gap-5">
          <div className="p-2 bg-def rounded-md min-w-[300px] max-w-[500px]">
            <Image
              src="/images/view.png"
              width={500}
              height={500}
              alt="view"
              className="rounded-md"
              onLoad={onImageLoad}
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white text-lg">
              My Interest in Front End Development
            </p>
            <p className="max-w-lg text-grayAlt2">
              My passion for building front-end applications emerged from my
              fascination with how technology can shape user experiences. I am
              particularly drawn to the creative and technical challenges of
              creating visually appealing, interactive, and responsive web
              pages. Through working with JavaScript frameworks like React and
              Next.js, I&apos;ve come to appreciate the balance between design
              and functionality.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col gap-5 ">
            <p className="text-lg text-white">
              My Background in Information Technology
            </p>
            <p className="max-w-lg text-grayAlt2">
              In February of 2025, I graduated from IT school at one of the
              universities in South Korea. During my studies, I developed a
              strong passion for web development, particularly front-end
              technologies. I became proficient in HTML, CSS, JavaScript, and
              frameworks like React and Next.js, where I focused on creating
              dynamic, user-friendly websites and applications.
            </p>
            <div className="p-2 bg-def rounded-md min-w-[350px] max-w-[500px]">
              <Image
                src="/images/viewEurope.png"
                width={500}
                height={500}
                alt="view"
                className="rounded-md"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-10 mt-10 md:hidden">
        <div className="flex flex-col items-start gap-5">
          <div className="p-2 bg-def rounded-md min-w-[300px] max-w-[500px]">
            <Image
              src="/images/view.png"
              width={500}
              height={500}
              alt="view"
              className="rounded-md"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-white">
              My Background in Information Technology
            </p>
            <p className="max-w-lg text-grayAlt2">
              In February of 2025, I graduated from IT school at one of the
              universities in South Korea. During my studies, I developed a
              strong passion for web development, particularly front-end
              technologies. I became proficient in HTML, CSS, JavaScript, and
              frameworks like React and Next.js, where I focused on creating
              dynamic, user-friendly websites and applications.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="p-2 bg-def rounded-md min-w-[300px] max-w-[500px]">
            <Image
              src="/images/viewEurope.png"
              width={500}
              height={500}
              alt="view"
              className="rounded-md"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-white">
              My Interest in Front End Development
            </p>
            <p className="max-w-lg text-grayAlt2">
              My passion for building front-end applications emerged from my
              fascination with how technology can shape user experiences. I am
              particularly drawn to the creative and technical challenges of
              creating visually appealing, interactive, and responsive web
              pages. Through working with JavaScript frameworks like React and
              Next.js, I&apos;ve come to appreciate the balance between design
              and functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
