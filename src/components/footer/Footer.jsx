import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import headerLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1C1E53] h-[489px]">
      <div className="container flex place-items-center h-[100%]">
        <div className="wrapper flex w-[90%] gap-[140px] ">
          <div className="left text-white  flex-[40%] flex flex-col gap-4">
            <img
              src={headerLogo}
              alt="header-logo"
              className="size-[30%] pt-5"
            />
            <p className="w-[70%]">
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className="text-black bg-[#FCD980] flex gap-[30px] mt-[60px] pt-[17px] pl-[37px] pb-[17px] w-[80%]">
              <div>
                <span className="font-medium">Email me at</span>
                <p>contact@website.com</p>
              </div>
              <div>
                <span className="font-medium">Call us</span>
                <p> 0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="right text-white flex-[30%] flex-col">
            <p className="text-[48px] font-medium mb-2">Lets Talk!</p>
            <p className="text-gray-400">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="flex gap-[27px] mt-7">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
