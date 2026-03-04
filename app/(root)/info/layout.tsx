import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Edward Cahyadi — software engineer based in Seoul with experience in front-end development, React, and Next.js.",
  openGraph: {
    title: "About | Edward Cahyadi",
    description:
      "Learn about Edward Cahyadi — software engineer based in Seoul with experience in front-end development, React, and Next.js.",
  },
};

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
