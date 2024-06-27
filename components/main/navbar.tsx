"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ${
        isSmallScreen ? "h-[50px] px-5" : "h-[65px] px-10"
      }`}
      id="navcont"
    >
      <div
        className={`w-full h-full flex flex-row items-center justify-between m-auto ${
          isSmallScreen ? "px-2" : "px-[10px]"
        }`}
      >
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span
            className={`font-bold ml-[10px] hidden md:block text-gray-300 ${
              isSmallScreen ? "text-sm" : "text-lg"
            }`}
          >
            Deniz&apos;s Portfolio
          </span>
        </a>
        <div
          className={`h-full flex flex-row items-center justify-between ${
            isSmallScreen ? "w-[250px]" : "w-[500px] md:mr-20"
          }`}
        >
          <div
            className={`flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] ${
              isSmallScreen
                ? "mr-[5px] px-[10px] py-[7px]"
                : "mr-[15px] px-[20px] py-[13px]"
            } rounded-full text-gray-200`}
          >
            <a
              href="#about-me"
              className={`navBarEl cursor-pointer hover:text-[#ba9cff] ${
                isSmallScreen ? "text-sm" : "text-base"
              }`}
            >
              About me
            </a>
            <a
              href="#skills"
              className={`navBarEl hover:text-[#ba9cff] ${
                isSmallScreen ? "text-sm" : "text-base"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`navBarEl hover:text-[#ba9cff] ${
                isSmallScreen ? "text-sm" : "text-base"
              }`}
            >
              Projects
            </a>
          </div>
        </div>

        <div className={`flex flex-row ${isSmallScreen ? "gap-2" : "gap-5"}`}>
          <a href="https://github.com/Deniz-Misirlioglu" target="_blank">
            <FaGithub
              style={{
                color: "#ffffff",
                width: isSmallScreen ? 20 : 24,
                height: isSmallScreen ? 20 : 24,
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deniz-misirlioglu-6b247a22a/"
            target="_blank"
          >
            <FaLinkedin
              style={{
                color: "#ffffff",
                width: isSmallScreen ? 20 : 24,
                height: isSmallScreen ? 20 : 24,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
