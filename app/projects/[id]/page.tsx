import Journal from "@/components/Journal";
import { project } from "@/constant";
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
    <>
      <Journal {...projectData} />
    </>
  );
};

export default page;
