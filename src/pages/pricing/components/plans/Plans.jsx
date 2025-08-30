import React from "react";

const Plans = () => {
  return (
    <section>
      <div className="container pb-[150px]">
        <div className="place-items-center mt-[150px] flex flex-col gap-4">
          <h3 className="text-4xl font-medium">Our Pricing Plans</h3>
          <p className="w-[40%] text-center text-[#282938] mb-[60px]">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className="card-wrapper grid grid-cols-3 gap-[30px] h-[740px] ">
          <div className="rounded-[12px] bg-[#F4F6FC] p-[40px]">
            <ul className="flex flex-col gap-[15px]">
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <button className="h-[7%] m-auto bg-[#282938] text-white block border w-[230px] rounded-[40px]">
              Get started
            </button>
          </div>
          <div className="rounded-[12px] bg-[#1C1E53] p-[40px]">
            <ul className="text-white flex flex-col gap-[15px]">
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <button className="h-[7%] m-auto bg-[#FCD980] text-black block border w-[230px] rounded-[40px]">
              Get started
            </button>
          </div>
          <div className="rounded-[12px] bg-[#F4F6FC] p-[40px]">
            <ul className="flex flex-col gap-[15px]">
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <button className="h-[7%] m-auto bg-[#282938] text-white block border w-[230px] rounded-[40px]">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
