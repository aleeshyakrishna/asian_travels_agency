"use client";
import React from "react";
import Lottie from "lottie-react";
import SuccessBlowUp from "./SuccessAnimation.json";
import { motion } from "framer-motion";
import Link from "next/link";

const SuccessPopup: React.FC = () => {
  return (
    <div className="backdrop-blur-4 fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="2xl:min-h-1/3 relative w-5/6 overflow-hidden rounded border bg-white p-4 py-6 md:w-3/5 lg:w-2/5 2xl:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lottie Animation Background */}
        <Lottie
          animationData={SuccessBlowUp}
          loop={false}
          autoplay={true}
          className="absolute inset-0 h-full w-full"
        />

        {/* Text Overlay and Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center p-4 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="96"
            viewBox="0 0 98 96"
            fill="none"
          >
            <path
              d="M20.3264 67.8898C20.0509 67.8898 19.782 67.8051 19.5559 67.6471C19.3298 67.4891 19.1574 67.2654 19.062 67.0061C18.9665 66.7468 18.9526 66.4644 19.022 66.1969C19.0915 65.9294 19.2409 65.6897 19.4503 65.5101L39.1008 48.6763C39.3725 48.4432 39.7253 48.3279 40.0817 48.3558C40.4381 48.3837 40.7688 48.5525 41.0012 48.825C41.2335 49.0975 41.3484 49.4515 41.3206 49.809C41.2928 50.1666 41.1246 50.4984 40.8529 50.7315L21.2024 67.6058C20.9527 67.8007 20.6426 67.9012 20.3264 67.8898ZM77.7145 67.8898C77.3932 67.8898 77.0826 67.7747 76.8384 67.5653L57.1879 50.772C56.9109 50.539 56.7375 50.205 56.7059 49.8437C56.6743 49.4823 56.7871 49.1232 57.0194 48.8453C57.2518 48.5674 57.5847 48.3934 57.9448 48.3617C58.305 48.33 58.663 48.4432 58.94 48.6763L78.5905 65.5101C78.7999 65.6897 78.9494 65.9294 79.0188 66.1969C79.0883 66.4644 79.0743 66.7468 78.9789 67.0061C78.8834 67.2654 78.711 67.4891 78.485 67.6471C78.2589 67.8051 77.99 67.8898 77.7145 67.8898ZM49.0204 51.3805C47.9969 51.3823 46.9831 51.1813 46.0372 50.7892C45.0912 50.3971 44.2318 49.8215 43.508 49.0954L19.7873 26.6504L21.6337 24.6763L45.3949 47.1754C45.8693 47.6513 46.4324 48.0288 47.0521 48.2863C47.6719 48.5439 48.3361 48.6764 49.0069 48.6764C49.6778 48.6764 50.342 48.5439 50.9618 48.2863C51.5815 48.0288 52.1446 47.6513 52.619 47.1754L76.3936 24.7033L78.2401 26.6774L54.4924 49.1495C53.7712 49.864 52.9168 50.4288 51.9778 50.8116C51.0389 51.1944 50.0339 51.3877 49.0204 51.3805Z"
              fill="url(#paint0_linear_3369_9183)"
            />
            <path
              d="M77.3235 70.3097H22.0649C20.6351 70.3097 19.2639 69.7399 18.2528 68.7256C17.2418 67.7113 16.6738 66.3357 16.6738 64.9013V29.7463C16.6738 28.3119 17.2418 26.9363 18.2528 25.922C19.2639 24.9077 20.6351 24.3379 22.0649 24.3379H77.3235C78.0315 24.3379 78.7325 24.4778 79.3866 24.7496C80.0407 25.0214 80.635 25.4198 81.1356 25.922C81.6362 26.4242 82.0333 27.0204 82.3042 27.6766C82.5751 28.3328 82.7146 29.0361 82.7146 29.7463V64.9013C82.7146 65.6115 82.5751 66.3148 82.3042 66.971C82.0333 67.6272 81.6362 68.2234 81.1356 68.7256C80.635 69.2278 80.0407 69.6262 79.3866 69.898C78.7325 70.1698 78.0315 70.3097 77.3235 70.3097ZM22.0649 27.0421C21.7109 27.0421 21.3604 27.1121 21.0334 27.248C20.7063 27.3839 20.4092 27.5831 20.1589 27.8342C19.9086 28.0853 19.71 28.3834 19.5746 28.7115C19.4391 29.0396 19.3694 29.3912 19.3694 29.7463V64.9013C19.3694 65.2564 19.4391 65.608 19.5746 65.9361C19.71 66.2642 19.9086 66.5623 20.1589 66.8134C20.4092 67.0646 20.7063 67.2637 21.0334 67.3996C21.3604 67.5355 21.7109 67.6055 22.0649 67.6055H77.3235C77.6775 67.6055 78.028 67.5355 78.355 67.3996C78.6821 67.2637 78.9792 67.0646 79.2295 66.8134C79.4798 66.5623 79.6784 66.2642 79.8139 65.9361C79.9493 65.608 80.019 65.2564 80.019 64.9013V29.7463C80.019 29.3912 79.9493 29.0396 79.8139 28.7115C79.6784 28.3834 79.4798 28.0853 79.2295 27.8342C78.9792 27.5831 78.6821 27.3839 78.355 27.248C78.028 27.1121 77.6775 27.0421 77.3235 27.0421H22.0649Z"
              fill="url(#paint1_linear_3369_9183)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3369_9183"
                x1="49.0204"
                y1="24.6763"
                x2="49.0204"
                y2="67.8907"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FBC72" />
                <stop offset="1" stopColor="#2AABDB" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3369_9183"
                x1="49.6942"
                y1="24.3379"
                x2="49.6942"
                y2="70.3097"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5FBC71" />
                <stop offset="1" stopColor="#2AABDB" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-md md:text-md mb-4 px-4 pb-4 font-normal text-[#1E1E1E] 2xl:px-12">
            Thank you for contacting us. Our team will get in touch with you
            soon.
          </h2>
          <Link
            aria-label="new-event"
            href="/"
            className={` group inline-flex items-center gap-x-1 truncate rounded-lg px-5 py-2 text-black`}
          >
            Back to site
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPopup;
