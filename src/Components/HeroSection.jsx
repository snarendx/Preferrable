import React from "react";
import Partners from "./TestimonalSection";

const HeroSection = () => {
  
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center px-10 text-center">
        <div className="flex-0">
          <h1 className="text-[38px] md:text-[64px] lg:text-[100px] font-poppins font-extrabold mb-6 lg:mb-20">
            We Help <br /> <span className="text-[#ff8400]">You</span> Get The
            Right <span className="text-[#FF8400]">Job</span>
          </h1>

          <p className="text-lg mb-6 text-[20px] md:text-[28px] lg:text lg:mb-8">
            Join us and take your career to the <br />
            next level.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-20 items-center justify-center">
            <button className="bg-[#657ED4] text-black text-[24px] md:text lg:text py-4 px-8 rounded-3xl mb-4 sm:mb-0">
              How does it work?
            </button>
            <button className="bg-[#3626A7] text-black text-[24px] md:text lg:text py-4 px-16 rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
        <div className=" mt-2">
          <img
            src="Frame 3.svg"
            alt="Job Search"
            className="w-full h-auto max-w-3xl mx-auto lg:mx-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-10 lg:flex-row lg:items-stretch font-semibold mt-28 space-y-4 lg:space-y-0 lg:space-x-14">
        <div className="text-center">
          <p className="text-[36px] md:text-[42px] lg:text-[38px] font-bold text-[#ff8400]">
            1200+
          </p>
          <p className="text-[32px] md:text-[36px] lg:text-[40px]">
            Job Available
          </p>
        </div>
        <div className="h-28 border-l border-black hidden lg:block"></div>
        <div className="text-center">
          <p className="text-[36px] md:text-[42px] lg:text-[38px] font-bold text-[#ff8400]">
            200+
          </p>
          <p className="text-[32px] md:text-[36px] lg:text-[40px]">
            Top Companies
          </p>
        </div>
        <div className="h-28 border-l border-black hidden lg:block"></div>
        <div className="text-center">
          <p className="text-[36px] md:text-[42px] lg:text-[38px] font-bold text-[#ff8400]">
            30,000+
          </p>
          <p className="text-[32px] md:text-[36px] lg:text-[40px]">
            Candidate Hired
          </p>
        </div>
        <div className="h-28 border-l border-black hidden lg:block"></div>
        <div className="text-center">
          <p className="text-[36px] md:text-[42px] lg:text-[38px] font-bold text-[#ff8400]">
            30+
          </p>
          <p className="text-[32px] md:text-[36px] lg:text-[40px]">
            Class Available
          </p>
        </div>
      </div>
      
      <Partners />

      
    </div>
  );
};

export default HeroSection;
