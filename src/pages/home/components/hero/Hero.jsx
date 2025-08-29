import React from "react";
import hero_right from "../../../../assets/hero_right.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-[662px] w-[100%] bg-[#1C1E53]">
      <div className="container">
        <div className="flex place-items-center">
          <div className="flex-[50%] flex flex-col text-white gap-[24px]">
            <h2 className="text-[50px] font-bold">
              Building stellar websites for early startups
            </h2>
            <p className="text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex place-items-center gap-4 ">
              <button className="mr-[30px] w-[220px] bg-amber-200 h-[60px] text-black rounded-full">
                View our work
              </button>
              <button>View pricing</button>
              <ArrowRight />
            </div>
          </div>
          <div className="flex-col flex-[50%]">
            <img src={hero_right} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
