import { client } from "./client";
import {
  allProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  siteSettingsQuery,
} from "./queries";
import type {
  SanityProject,
  SanityProjectDetail,
  SanityProjectSlug,
  SanitySiteSettings,
} from "./types";

const defaultSettings: SanitySiteSettings = {
  _id: "",
  name: "Edward Cahyadi",
  jobTitle: "Software Engineer",
  location: "Seoul",
  focus: "Web Development",
  heroHeadingDesktop: "I develop responsive apps &",
  heroHeadingItalic: "Interactive UI.",
  heroHeadingMobile: "I develop apps, interactions &",
  heroHeadingMobileItalic: "stories.",
  linkedin: "https://www.linkedin.com/in/edward-cahyadi11/",
  github: "https://github.com/edw11",
  resume:
    "https://drive.google.com/file/d/1nMY-231EWsDOCURxFRXZ7790kWww5dmB/view?usp=sharing",
  email: "edwardcahyadi11@gmail.com",
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS",
    "Python",
    "TensorFlow",
    "Node.js",
    "Git",
    "Figma",
  ],
  aboutHeading:
    "I'm passionate about creating beautiful applications that empower people.",
  aboutSections: [],
  experiences: [],
};

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(allProjectsQuery, {}, { next: { revalidate: 60 } });
}

export async function getProjectBySlug(
  slug: string
): Promise<SanityProjectDetail | null> {
  return client.fetch(
    projectBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getProjectSlugs(): Promise<SanityProjectSlug[]> {
  return client.fetch(projectSlugsQuery, {}, { next: { revalidate: 60 } });
}

export async function getSiteSettings(): Promise<SanitySiteSettings> {
  const settings = await client.fetch(
    siteSettingsQuery,
    {},
    { next: { revalidate: 60 } }
  );
  return settings || defaultSettings;
}
