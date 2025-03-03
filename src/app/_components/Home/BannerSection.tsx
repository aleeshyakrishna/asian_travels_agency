"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/banner.png",
    location: "NORWAY",
    subtext: "EXPLORE",
  },
  {
    image: "/images/banner3.jpg",
    location: "SINGAPORE",
    subtext: "EXPERIENCE",
  },
  {
    image: "/images/uae.jpg",
    location: "DUBAI",
    subtext: "EXPERIENCE",
  },
  {
    image: "/images/egypth.jpg",
    location: "EGYPT",
    subtext: "EXPERIENCE",
  },
];

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentSlide((current) => (current + 1) % slides.length);
            setIsAnimating(false);
          }, 300);
          return 0;
        }
        return prev + 100 / 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[380px] lg:h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transform: isAnimating ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-center overflow-hidden">
          <div
            className={`text-sm tracking-wider mb-2 transform transition-all duration-500 ease-out ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {slides[currentSlide].subtext}
          </div>
          <div className="overflow-hidden">
            <h1
              className={`text-6xl font-semibold lg:tracking-[20px] transform transition-all duration-500 ease-out ${
                isAnimating
                  ? "opacity-0 translate-y-full"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {slides[currentSlide].location}
            </h1>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute right-3 lg:right-12 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/30">
        <div
          className="w-full bg-white transition-all duration-100"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-2 lg:bottom-20 right-2 lg:right-12 text-white">
        <span className="text-2xl font-bold">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="text-sm opacity-70">
          /{String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default BannerSection;
