import { ArrowRight } from "lucide-react";
import React from "react";
import card1 from "../../../../assets/card1.png";
import card2 from "../../../../assets/card2.png";
import card3 from "../../../../assets/card3.png";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between place-items-center m-12 ml-0">
          <h2 className="font-medium text-5xl">View our projects</h2>
          <p className="flex place-items-center gap-3">
            View More <ArrowRight className="inline" />
          </p>
        </div>
        <div className="grid gap-[23px] grid-cols-3 mb-[120px] text-white ">
          <div
            className="col-[1/3] row-[1/3] bg-cover bg-center h-[600px] p-[6%] flex flex-col justify-items-right place-content-end gap-5"
            style={{ backgroundImage: `url(${card1})` }}
          >
            <h3 className="font-medium text-2xl w-[50%]">
              Workhub office Webflow Webflow Design
            </h3>
            <p className="w-[35%]">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <p className="mt-[5%] text-[#FCD980]">
              View project <ArrowRight className="inline" />
            </p>
          </div>
          <div
            className="p-[10%] bg-cover bg-center flex flex-col justify-items-right place-content-end gap-3"
            style={{ backgroundImage: `url(${card2})` }}
          >
            <h3 className="font-medium text-4xl">Unisaas Website Design</h3>
            <p className="text-[#FCD980]">
              View portfolio <ArrowRight className="inline" />
            </p>
          </div>
          <div
            className=" bg-cover bg-center p-[10%]"
            style={{ backgroundImage: `url(${card3})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
