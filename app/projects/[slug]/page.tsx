import Journal from "@/components/Journal";
import { getProjectBySlug, getProjectSlugs, getSiteSettings } from "@/sanity/fetch";
import type { SanityLinks } from "@/sanity/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.descriptionTitle,
    description: project.description,
    openGraph: {
      title: `${project.descriptionTitle} | Edward Cahyadi`,
      description: project.description,
    },
  };
}

const Page = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const [project, settings] = await Promise.all([
    getProjectBySlug(slug),
    getSiteSettings(),
  ]);

  if (!project) {
    return notFound();
  }

  const links: SanityLinks = {
    linkedin: settings.linkedin,
    github: settings.github,
    resume: settings.resume,
    email: settings.email,
  };

  return (
    <Journal
      project={project}
      links={links}
      name={settings.name}
      jobTitle={settings.jobTitle}
    />
  );
};

export default Page;
