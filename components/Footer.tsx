"use client";
import Link from "next/link";
import type { SanityLinks } from "@/sanity/types";

const Footer = ({
  links,
  name,
  jobTitle,
}: {
  links: SanityLinks;
  name: string;
  jobTitle: string;
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const linkClass =
    "text-grayAlt2 transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-grayAlt2 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="flex justify-center w-full">
      <div className="w-[69rem] px-7 md:px-16 lg:px-32 xl:px-0 pt-20 pb-14">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl text-white font-medium">{name}</h2>
            <p className="text-sm text-grayAlt3">{jobTitle}</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <button className={linkClass} onClick={scrollToTop}>
              Work
            </button>
            <Link href="/info" className={linkClass}>
              Info
            </Link>
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
              © {new Date().getFullYear()} {name}. All Rights Reserved.
            </p>
            <p className="text-xs text-grayAlt3">
              Made with React, Next.js & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
