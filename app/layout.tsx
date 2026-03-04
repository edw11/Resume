import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Load the local font files
const newMontreal = localFont({
  src: [
    {
      path: "/fonts/NeueMontreal-Bold.otf", // Correct path, remove 'Font/' prefix
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/NeueMontreal-Medium.otf", // Correct path
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/NeueMontreal-Regular.otf", // Correct path
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/NeueMontreal-Italic.otf", // Correct path
      weight: "400",
      style: "italic", // Correct style for italic font
    },
  ],
  variable: "--font-new-montreal",
});

export const metadata: Metadata = {
  title: {
    default: "Edward Cahyadi — Software Engineer",
    template: "%s | Edward Cahyadi",
  },
  description:
    "Portfolio of Edward Cahyadi, a software engineer based in Seoul specializing in React, Next.js, and front-end development.",
  openGraph: {
    title: "Edward Cahyadi — Software Engineer",
    description:
      "Portfolio of Edward Cahyadi, a software engineer based in Seoul specializing in React, Next.js, and front-end development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward Cahyadi — Software Engineer",
    description:
      "Portfolio of Edward Cahyadi, a software engineer based in Seoul specializing in React, Next.js, and front-end development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newMontreal.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Edward Cahyadi",
              jobTitle: "Software Engineer",
              url: "https://edwardcahyadi.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/edward-cahyadi11/",
                "https://github.com/edw11",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Front-end Development",
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
