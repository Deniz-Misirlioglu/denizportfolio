import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Deniz Misirlioglu
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[13px] rounded-full text-gray-200">
            <a href="#about-me" className="navBarEl">
              About me
            </a>
            <a href="#skills" className="navBarEl">
              Skills
            </a>
            <a href="#projects" className="navBarEl">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://github.com/Deniz-Misirlioglu" target="_blank">
            <Image
              src="/gitwhite.png"
              alt="GitHub"
              key="/gitwhite.png"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deniz-misirlioglu-6b247a22a/"
            target="_blank"
          >
            <Image
              src="/Linkedin.png"
              alt="Linkedin"
              key="/Linkedin.png"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
