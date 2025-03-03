"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image from "next/image";
import { StaticImageData } from "next/image";
import egypt from "../../../../public/images/egypt2.jpg";
import soudi from "../../../../public/images/saudiarabia.jpg";
import singapore from "../../../../public/images/singapore.jpg";
import umra from "../../../../public/images/umra.jpg";
import bahrain from "../../../../public/images/bahrain3.jpg";
import dubai from "../../../../public/images/dubai.jpg";
import { VisaIcon, FreelanceIcon, IqamaIcon } from "../common/SvgIcons";
import { useEffect, useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface ServiceItem {
  title: string;
  img: StaticImageData;
  visaDuration?: string;
  Freelance?: string;
  iqama?: string;
}

const VisaServices: React.FC = () => {
  const [isXLScreen, setIsXLScreen] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXLScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const services: ServiceItem[] = [
    {
      title: "Saudi Arabia",
      img: soudi,
      iqama: "30 Days, 1 Year IQAMA",
      Freelance: "",
      visaDuration: "30,60 Days Visa",
    },
    {
      title: "Umra",
      img: umra,
      visaDuration: "30,60 Days Visa",
    },
    {
      title: "UAE",
      img: dubai,
      visaDuration: "30,60 Days Visa",
    },
    {
      title: "Bahrain",
      img: bahrain,
      visaDuration: "30,60 Days Visa",
    },
    {
      title: "Egypt",
      img: egypt,
      visaDuration: "30 Days Visa",
    },

    {
      title: "Singapore",
      img: singapore,
      visaDuration: "30,60 Days Visa",
    },
  ];

  const ServiceCard = ({ service }: { service: ServiceItem }) => (
    <div className="flex flex-col px-2 transition-transform duration-500 ease-in-out">
      <div className="relative">
        {/* Add z-index to the overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-xl z-10"></div>
        <Image
          src={service.img}
          alt={service.title}
          className="w-full rounded-xl h-[300px] object-cover transition-all duration-500 ease-in-out transform"
        />
        <div className="absolute bottom-4 left-2 text-white font-montserrat text-2xl font-semibold z-20">
          <p>{service.title}</p>
        </div>
      </div>
      <div className="pt-6 space-y-4 w-full">
        {service.visaDuration && (
          <div className="flex flex-row space-x-2 items-center max-w-64 md:w-full">
            <div className="w-1/5">
              <VisaIcon />
            </div>
            <p className="text-md w-4/5 font-medium tracking-wide text-[#6D6D6D]">
              {service.visaDuration}
            </p>
          </div>
        )}
        {service.Freelance && (
          <div className="flex flex-row space-x-2 items-center max-w-64 md:w-full">
            <div className="w-1/5">
              <FreelanceIcon />
            </div>
            <p className="text-md w-4/5 font-medium tracking-wide text-[#6D6D6D]">
              Freelance Visa
            </p>
          </div>
        )}
        {service.iqama && (
          <div className="flex flex-row space-x-2 items-center max-w-64 md:w-full">
            <div className="w-1/5">
              <IqamaIcon />
            </div>
            <p className="text-md w-4/5 font-medium tracking-wide text-[#6D6D6D]">
              {service.iqama}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="pb-10 pt-4 bg-white relative">
      <h2 className="text-3xl text-center font-semibold text-black">
        VISA SERVICES
      </h2>
      <div className="container pt-4 pb-12">
        <div className="flex justify-end items-center mb-6">
          {isXLScreen && (
            <div className="flex gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {isXLScreen ? (
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="slide"
            cssMode={false}
            watchSlidesProgress={true}
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            className="py-8 transition-opacity duration-500 ease-in-out"
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="transition-transform duration-500 ease-in-out"
              >
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: ease-out !important;
        }

        .swiper-slide {
          transition: transform 800ms ease-out !important;
        }

        .swiper-slide-active {
          transition: transform 800ms ease-out !important;
        }
      `}</style>
    </div>
  );
};

export default VisaServices;
