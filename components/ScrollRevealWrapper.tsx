"use client";
import { useScrollReveal } from "./useScrollReveal";

const ScrollRevealWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fadeUp" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
