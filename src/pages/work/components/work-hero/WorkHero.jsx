import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const WorkHero = () => {
  return (
    <section className="h-[400px] bg-[#F4F6FC] mb-[300px]">
      <div className="container w-[100%] h-[100%] place-items-center">
        <div className="place-items-center w-[50%] text-center flex  flex-col gap-4 p-[5%]">
          <p>what we created</p>
          <h2 className="text-4xl font-medium mb-[3%]">Our Work Portfolio</h2>
          <p>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-[27px] mt-7">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
