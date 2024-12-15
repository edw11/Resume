import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

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
