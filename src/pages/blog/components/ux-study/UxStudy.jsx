import React from "react";
import blog_head from "../../../../assets/blog_head.png";

const UxStudy = () => {
  return (
    <section className="mt-[150px] mb-[100px]">
      <div className="container place-items-center text-center grid gap-[30px]">
        <h2 className="text-4xl w-[50%] font-medium">
          A UX Case Study on Creating a Studious Environment for Students
        </h2>
        <span className="font-medium">
          Andrew Jonson Posted on 27th January 2021
        </span>
        <img src={blog_head} alt="" />
        <p className="w-[60%]">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <span className="text-[#2405F2]">Read more</span>
      </div>
    </section>
  );
};

export default UxStudy;
