"use client";
import InfoDetails from "@/components/InfoDetails";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";
import type { SanitySiteSettings, SanityLinks } from "@/sanity/types";

const InfoPageClient = ({ settings }: { settings: SanitySiteSettings }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const onImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const infoDetailsReveal = useScrollReveal();
  const experienceReveal = useScrollReveal();
  const skillsReveal = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links: SanityLinks = {
    linkedin: settings.linkedin,
    github: settings.github,
    resume: settings.resume,
    email: settings.email,
  };

  const linkClass =
    "text-grayAlt2 transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-grayAlt2 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div>
      <div
        className={`flex justify-center items-center min-h-screen bg-black fixed inset-0 z-10 transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/icons/loader.svg"
          alt="loader"
          width={24}
          height={24}
          className="ml-2 animate-spin"
        />
      </div>
      <div className="inset-0 bg-gradient-to-b from-white/10 max-md:from-white/10 to-black">
        <section className="fixed w-full z-10">
          <Navbar state={true} links={links} />
        </section>
        <div
          className={`pt-28 flex flex-col w-full items-center justify-center px-9 ${
            isLoaded ? "animate-slideUp" : ""
          }`}
        >
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start w-full gap-3">
                <div className="w-2 h-2 rounded-full bg-white "></div>
                <p className="text-white">About Me</p>
              </div>
              <p className="text-4xl md:text-5xl text-shadow min-w-[20rem] max-w-[65rem] text-white">
                {settings.aboutHeading}
              </p>
            </div>
            <div ref={infoDetailsReveal.ref} className={infoDetailsReveal.isVisible ? "animate-fadeUp" : "opacity-0"}>
              <InfoDetails onImageLoad={onImageLoad} aboutSections={settings.aboutSections || []} />
            </div>

            <div ref={experienceReveal.ref} className={experienceReveal.isVisible ? "animate-fadeUp" : "opacity-0"}>
              <div className="flex flex-col items-start w-full mt-20 border-t-2 border-grayAlt3  xl:w-[70rem]">
                <div className="flex items-center gap-3 mt-12">
                  <div className="w-3 h-3 rounded-full bg-white blur-[1px]"></div>
                  <p className="text-sm text-grayAlt2 md:text-sm uppercase tracking-[0.15em]">EXPERIENCE</p>
                </div>
              </div>

              {settings.experiences?.map((exp, index) => (
                <div
                  key={exp._key || index}
                  className={`flex flex-col items-start gap-3 w-full md:flex-row md:justify-between text-white ${index === 0 ? "mt-8" : "mt-10"}`}
                >
                  <h1 className="text-3xl font-medium">{exp.company}</h1>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-xl font-medium">{exp.jobTitle}</h1>
                      <p className="text-grayAlt3">{exp.dateRange}</p>
                    </div>
                    <p className="max-w-md text-grayAlt2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div ref={skillsReveal.ref} className={skillsReveal.isVisible ? "animate-fadeUp" : "opacity-0"}>
              <div className="flex flex-col items-start w-full mt-20 border-t-2 border-grayAlt3 xl:w-[70rem]">
                <div className="flex items-center gap-3 mt-12">
                  <div className="w-3 h-3 rounded-full bg-white blur-[1px]"></div>
                  <p className="text-sm text-grayAlt2 md:text-sm uppercase tracking-[0.15em]">SKILLS</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 w-full mt-8">
                {settings.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-white text-sm border border-grayAlt3 rounded-full transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center w-full">
        <div className="w-[69rem] px-7 xl:px-0 pt-28 pb-14">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl text-white font-medium">{settings.name}</h2>
              <p className="text-sm text-grayAlt3">{settings.jobTitle}</p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <Link href="/" className={linkClass}>
                Work
              </Link>
              <button className={linkClass} onClick={scrollToTop}>
                Info
              </button>
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </Link>
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                GitHub
              </Link>
              <Link
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Resume
              </Link>
              <Link
                href={`mailto:${links.email}`}
                className={linkClass}
              >
                Email
              </Link>
            </div>

            <div className="w-full h-px bg-def"></div>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-grayAlt2">
                © {new Date().getFullYear()} {settings.name}. All Rights Reserved.
              </p>
              <p className="text-xs text-grayAlt3">
                Made with React, Next.js & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InfoPageClient;
