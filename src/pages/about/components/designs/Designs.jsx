import React from "react";
import about_designs from "../../../../assets/about_designs.png";

const Designs = () => {
  return (
    <section>
      <div className="container flex flex-row min-h-[337px] w-[100%] mt-[150px] mb-[150px] gap-[30px]">
        <div className=" flex flex-col flex-[50%]  pt-[1%] gap-[12px]">
          <span className="font-medium">About us</span>
          <h2 className="font-sans text-5xl w-[70%] mb-[3%]">
            Our designs solve problems
          </h2>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div
          className="flex-[50%] bg-cover bg-center"
          style={{ backgroundImage: `url(${about_designs})` }}
        ></div>
      </div>
    </section>
  );
};

export default Designs;
