import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: "Edward Cahyadi — Fulstack Web Developer",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newMontreal.className} antialiased`}>{children}</body>
    </html>
  );
}
