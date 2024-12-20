import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="fixed w-full z-10">
        <Navbar state={false} />
      </section>
      <section className="pt-28 ">
        <Hero />
      </section>
      <section className=" flex justify-center px-3">
        <Project />
      </section>
    </div>
  );
}
