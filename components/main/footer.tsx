import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaLinkedin, FaYoutube } from "react-icons/fa";

// ... (imports)

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold">About</div>
            <p className="flex flex-row items-center  ">
              For business inquiries, contact me on &nbsp;
              <FaLinkedin />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[6px]"
                href="https://www.linkedin.com/in/deniz-misirlioglu-6b247a22a/"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] ">
              or at misirld@miamioh.edu
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center my-[15px]">
          &copy; Deniz Misirlioglu, All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
