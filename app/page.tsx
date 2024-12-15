import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Project />
      </section>
    </div>
  );
}
