import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container mt-[120px] mb-[120px] place-items-center text-center grid gap-[30px]">
          <h3 className="text-5xl font-bold">Contact Us</h3>
          <p className="w-[45%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="min-h-[640px] w-[80%] bg-[#F4F6FC] mt-[3%] rounded-[12px]">
            <form
              className="grid grid-cols-2 gap-[4%] h-[80%] p-[30px] pl-[80px] pr-[80px] pt-[70px]"
              action=""
            >
              <div className="h-[100px] flex flex-col gap-[10px] text-black place-items-left text-left">
                <span className="text-[18px] font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-[17px] border border-gray-400 rounded-[8px]"
                />
              </div>
              <div className="h-[100px] flex flex-col gap-[10px] text-black place-items-left text-left">
                <span className="text-[18px] font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-[17px] border border-gray-400 rounded-[8px]"
                />
              </div>
              <div className="h-[100px] flex flex-col gap-[10px] text-black place-items-left text-left">
                <span className="text-[18px] font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-[17px] border border-gray-400 rounded-[8px]"
                />
              </div>
              <div className="h-[100px] flex flex-col gap-[10px] text-black place-items-left text-left">
                <span className="text-[18px] font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-[17px] border border-gray-400 rounded-[8px]"
                />
              </div>
              <div className="h-[150px] flex flex-col gap-[10px] text-black col-[1/3] place-items-left text-left">
                <span className="text-[18px] font-medium">Message</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-[17px] h-[100%] border border-gray-400 rounded-[8px]"
                />
              </div>
              <button className="h-[60px] w-[230px] rounded-[41px] text-white bg-[#282938] font-medium mt-[20px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
