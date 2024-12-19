import Button from "@/components/Button";
import DetailCard from "@/components/DetailCard";
import Footer from "@/components/Footer";
import { project } from "@/constant";
import Image from "next/image";
import { notFound } from "next/navigation";
type Params = Promise<{ id: string }>;

const page = async ({ params }: { params: Params }) => {
  const { id } = await params; // Destructure ID from params

  const projectData = project.find((d) => d.id === id)?.detail; // Find the project by ID

  if (!projectData) {
    // Handle the "Not found" case
    return notFound();
  }

  return (
    <div>
      <div className="p-8 bg-gradient-to-b from-white/15 to-black ">
        <Button />

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col justify-center items-center   pt-14 gap-4 ">
            <h1 className="text-shadow text-4xl xl:text-6xl">
              {projectData.descriptionTitle}
            </h1>
            <p className="text-lg xl:text-lg text-grayAlt2">
              {projectData.descriptionSmallTitle}
            </p>
          </div>
          <Image
            src="/images/spotlight.png"
            width={1300}
            height={1300}
            alt="spotlight"
            className="mt-10"
          ></Image>
          <div className="flex justify-center items-center min-[1001px]:hidden">
            <div className="flex flex-col gap-8 justify-center items-start">
              <div className="flex flex-col gap-2">
                <p>My Role</p>
                <p className="md:text-lg text-grayAlt2">
                  <span className="text-white">{projectData.role} </span>
                  {projectData.descriptionRole}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Team</p>
                {projectData.team.map((name, index) => (
                  <p className="md:text-lg text-grayAlt2" key={index}>
                    {name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p>Timeline & Result</p>
                <p className="md:text-lg text-grayAlt2">
                  {projectData.timeline}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Overview</p>
                <p className="md:text-lg text-grayAlt2">
                  {projectData.Overview}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start gap-40  md:gap-16 max-[1001px]:hidden">
            <div className="flex flex-col gap-8">
              <div className="w-[25em]">
                <p>My Role</p>
                <p className="text-lg text-grayAlt2">
                  <span className="text-white">{projectData.role} </span>
                  {projectData.descriptionRole}
                </p>
              </div>
              <div className="text-lg">
                <p>Team</p>
                {projectData.team.map((name, index) => (
                  <p className=" text-grayAlt2" key={index}>
                    {name}
                  </p>
                ))}
              </div>
              <div className="text-lg">
                <p>Timeline & Result</p>
                <p className="text-grayAlt2">{projectData.timeline}</p>
              </div>
            </div>
            <div className="w-[30rem] text-lg">
              <p>Overview</p>
              <p className="text-lg text-grayAlt2 ">{projectData.Overview}</p>
            </div>
          </div>
          <DetailCard {...projectData} />
        </div>
      </div>
      <section className=" pt-28 pb-14 relative">
        <Footer />
      </section>
    </div>
  );
};

export default page;
