"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "../../../_css/header_section.module.css";
import Drawer from "./Drawer";
import Navigation from "./Navigation";
import SaftaLogo from "./SaftaLogo";

const lightHeaderPaths: string[] = [
  "/privacy-policy",
  "/terms-of-service",
  "/document",
];

const HeaderSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = React.useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);
  const [isHeaderLight, setIsHeaderLight] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
      pathname &&
      lightHeaderPaths.some((route) => pathname.startsWith(`/${route}`))
    ) {
      setIsHeaderLight(true);
    } else {
      setIsHeaderLight(false);
    }
  }, [pathname]);

  // SCROLL HANDLER
  const handleScroll = React.useCallback(() => {
    if (window.scrollY === 0) {
      setIsSticky(false);
    }
  }, []);

  // INTERSECTION OBSERVER HANDLER
  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (!target.isIntersecting) {
        setIsSticky(true);
      }
    },
    []
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const currentRef = headerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <header
        ref={headerRef}
        className={twMerge(
          "absolute top-0 z-[998] w-full bg-transparent py-5 text-white transition-colors duration-700 ease-linear md:py-2 2xl:py-3",
          isHeaderLight && "bg-white text-black shadow-header transition-none",
          isSticky &&
            `${styles["sticky-header"]} z-0 bg-white text-black backdrop-blur-sm`
        )}
      >
        <div className="relative space-y-5 px-1.5 min-[370px]:container">
          <div className="relative flex justify-between items-center   gap-x-2 min-[330px]:gap-x-4 min-[430px]:gap-x-10 min-[500px]:gap-x-6 lg:gap-x-4 xl:gap-x-6">
            {/* LEFT SECTION OR LOGO SECTION */}
            <div className="">
              <section aria-label="left-section">
                <Link aria-label="safta-logo" href={`/`}>
                  <SaftaLogo isSticky={isSticky || isHeaderLight} />
                </Link>
              </section>
            </div>
            <div className="">
              <Navigation isSticky={isSticky || isHeaderLight} />
            </div>
            {/* RIGHT SECTION */}
            <div className="  ">
              <div className="min-w-36 "></div>
              <section
                aria-label="right-section"
                className="flex flex-grow justify-end items-center md:flex-grow-0"
              >
                <button
                  className={`inline-flex cursor-pointer rounded-full md:hidden md:p-1.5 ml-auto"}`}
                  onClick={() => setIsOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 6H21M3 12H21M3 18H21"
                      stroke={isSticky || isHeaderLight ? "black" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </section>
            </div>
          </div>
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};

export default HeaderSection;
