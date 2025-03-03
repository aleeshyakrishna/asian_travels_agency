"use client";
import React from "react";
import Image from "next/image";
import moreInfoImg from "../../../../public/images/travel.png";

const MoreInfo = () => {
  return (
    <div className=" py-12  items-center justify-center bg-white text-black">
      <p className="text-center text-[#474747] text-sm tracking-[10px]">
        ABOUT US
      </p>
      <div className="flex pt-10">
        <div className="container mx-auto  lg:px-13">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-2xl lg:text-2xl font-bold text-gray-800">
                Transforming Tourism Together
              </h2>
              <p className="text-[#6D6D6D] lg:text-md font-medium leading-relaxed">
                Your Trusted Partner in Seamless Travel & Visa Solutions! From
                visa assistance to hassle-free travel documentation, we ensure a
                smooth journey to your dream destination. Explore the world with
                ease—because your journey begins with us!
              </p>
              <br />
              <button
                className="px-6 py-3 rounded-md text-white font-semibold shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                style={{
                  background:
                    "linear-gradient(244deg, #636bbe 35.3%, #27aae1 86.57%)",
                }}
                onClick={() => (window.location.href = "/about-us")}
              >
                Read More
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={moreInfoImg}
                alt="More Info"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
