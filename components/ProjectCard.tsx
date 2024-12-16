import Image, { StaticImageData } from "next/image";

type data = {
  imgURL: StaticImageData;
  bigTitle: string;
  title: string;
  description: string;
  colorStart: string;
  colorEnd: string;
};

const ProjectCard = (product: data) => {
  return (
    <div className="bg-dark_grey border-white border-2 border-opacity-10 border-solid px-2 pt-2 rounded-xl mt-10">
      <div
        className={`flex-col flex  xl:hover:bg-gradient-to-b  xl:hover:from-exoticBlue xl:hover:to-black px-7 pt-6  rounded-lg xl:w-[68rem] gap-14 justify-evenly`}
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
            className="md:w-[35px] md:h-[35px]"
          />
        </div>
        <div className="w-full justify-center flex">
          <Image
            src={product.imgURL}
            width={800}
            height={800}
            alt="stadia"
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
