import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { getAllProjects, getSiteSettings } from "@/sanity/fetch";
import type { SanityLinks } from "@/sanity/types";

export default async function Home() {
  const [projects, settings] = await Promise.all([
    getAllProjects(),
    getSiteSettings(),
  ]);

  const links: SanityLinks = {
    linkedin: settings.linkedin,
    github: settings.github,
    resume: settings.resume,
    email: settings.email,
  };

  return (
    <div className="overflow-hidden">
      <section className="fixed w-full z-10">
        <Navbar state={false} links={links} />
      </section>
      <section className="pt-28">
        <Hero settings={settings} />
      </section>
      <section className=" flex justify-center px-3">
        <Project projects={projects} />
      </section>
      <section className="pt-28 pb-14 ">
        <Footer links={links} name={settings.name} jobTitle={settings.jobTitle} />
      </section>
    </div>
  );
}
