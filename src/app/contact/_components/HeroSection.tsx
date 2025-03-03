"use client";

import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import React from "react";

const HeroSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="relative h-[250px] md:h-[300] bg-[#1E1E1E] bg-cover bg-left scale-x-[-1]"
      style={{
        backgroundImage: `url('/images/contactbanner.jpg')`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </section>
  );
};

export default HeroSection;
