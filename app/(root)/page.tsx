import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="pt-28 ">
        <Hero />
      </section>
      <section className=" flex justify-center px-3">
        <Project />
      </section>
    </div>
  );
}
