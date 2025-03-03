"use client";
import Link from "next/link";

import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import SaftaLogoMobile from "./Header/SaftaLogoMobile";

function Footer() {
  return (
    <footer className="bg-[#F4F4F4] text-[#6D6D6D] pb-6 ">
      <div className="container">
        <Link href="/">
          <SaftaLogoMobile />
        </Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3   items-center justify-center md:pb-10 container">
        {/* Logo and Contact Info */}

        <div className="flex flex-col  justify-center w-full pb-4 ">
          <div className="mt-4  space-y-2 ">
            <div className="flex items-center  space-x-2">
              <FiPhone />
              <p className="text-[#6D6D6D] text-md">(+966) 530222786</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail />
              <Link
                href="mailto:asianmanpowerksa@gmial.com"
                className="text-[#6D6D6D] text-md"
              >
                asianmanpowerksa@gmial.com
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center flex-col items-start md:items-center md:ml-3">
          <ul className="space-y-2 text-[#6D6D6D] text-md">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex justify-center flex-col items-center md:ml-3">
          <h2 className="text-[#6D6D6D] text-md mb-4">Follow Us</h2>
          <div className="flex space-x-4 pb-4">
            <Link href="" target="_blank">
              <FaInstagram
                size={30}
                className="text-[#6D6D6D] hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <Link href="" target="_blank">
              <FaFacebook
                size={30}
                className="text-[#6D6D6D] hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <Link href="" target="_blank">
              <FaTwitter
                size={30}
                className="text-[#6D6D6D] hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className=" lg:flex flex-col sm:flex-row sm:justify-between sm:items-center  text-center mx-auto border-t border-gray-600 pt-4 container">
        <p className="text-[#6D6D6D] text-md pb-4 md:pb-0">
          Copyright © 2025 Asian Travels, All rights reserved.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link href="" className="hover:underline text-[#6D6D6D] text-md">
            Privacy Policy
          </Link>
          <span className="text-[#6D6D6D] text-md">|</span>
          <Link href="" className="hover:underline text-[#6D6D6D] text-md">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
