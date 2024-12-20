import Image from "next/image";
import React from "react";

const InfoDetails = () => {
  return (
    <div>
      <div className="flex  w-full gap-10 mt-10 max-md:hidden">
        <div className="flex flex-col items-start gap-5">
          <div className="p-2 bg-def rounded-md min-w-[350px] max-w-[500px]">
            <Image
              src="/images/view.png"
              width={500}
              height={500}
              alt="view"
              className="rounded-md"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <p>My Background in Information Technology</p>
            <p className="max-w-lg">
              In June of 2022, I graduated from architecture school at the
              University of Toronto. There, I became obsessed with architectural
              visualization. I was deeply fascinated in the concepts of
              modularity and adaptability — how our built environment could
              organically evolve in conjuction with our lifestyles and larger
              societal forces.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col gap-5">
            <p>My Background in Information Technology</p>
            <p className="max-w-lg">
              In June of 2022, I graduated from architecture school at the
              University of Toronto. There, I became obsessed with architectural
              visualization. I was deeply fascinated in the concepts of
              modularity and adaptability — how our built environment could
              organically evolve in conjuction with our lifestyles and larger
              societal forces.
            </p>
            <div className="p-2 bg-def rounded-md min-w-[350px] max-w-[500px]">
              <Image
                src="/images/view.png"
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
          <div className="p-2 bg-def rounded-md min-w-[450px] max-w-[500px]">
            <Image
              src="/images/view.png"
              width={500}
              height={500}
              alt="view"
              className="rounded-md"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <p>My Background in Information Technology</p>
            <p className="max-w-lg">
              In June of 2022, I graduated from architecture school at the
              University of Toronto. There, I became obsessed with architectural
              visualization. I was deeply fascinated in the concepts of
              modularity and adaptability — how our built environment could
              organically evolve in conjuction with our lifestyles and larger
              societal forces.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="p-2 bg-def rounded-md min-w-[450px] max-w-[500px]">
            <Image
              src="/images/view.png"
              width={500}
              height={500}
              alt="view"
              className="rounded-md"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <p>My Background in Information Technology2</p>
            <p className="max-w-lg">
              In June of 2022, I graduated from architecture school at the
              University of Toronto. There, I became obsessed with architectural
              visualization. I was deeply fascinated in the concepts of
              modularity and adaptability — how our built environment could
              organically evolve in conjuction with our lifestyles and larger
              societal forces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
