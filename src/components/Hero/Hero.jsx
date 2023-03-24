import React from "react";
import sideImage from "../../assets/svgs/hero-sideImage.svg";
import sideImageMobile from "../../assets/svgs/hero-sideImage-mobile.svg";
import heroImage from "../../assets/images/hero-image.png"

const Hero = () => {
  return (
    <div className="relative">
      <img src={sideImageMobile} alt="" className="absolute lg:hidden block" />
      <img src={sideImage} alt="" className="absolute hidden lg:block" />
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center lg:justify-between lg:items-center py-24 lg:py-20 w-full lg:max-w-[1049px] mx-auto">
        <div className="flex flex-col gap-9 justify-center items-center lg:items-start">
          <h1 className="font-bold lg:font-extrabold text-[40px] lg:text-[58px] leading-[57px] lg:leading-[80px]  text-center lg:text-left text-[#252B42]">Your Financial Assistance </h1>
          <h4 className="font-medium text-xl leading-8 text-center lg:text-left text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-col items-center lg:flex-row gap-5">
            <button className="bg-[#23A6F0] rounded-[37px] py-3 px-9 text-sm text-center text-white font-bold cursor-pointer  hover:animate-pulse">Get Quote Now</button>
            <button className="ring-[#23A6F0] ring-2 rounded-[37px] py-3 px-9 text-sm text-center text-[#23A6F0] font-bold cursor-pointer hover:animate-pulse">Learn More</button>
          </div>
        </div>
        <div className="bg-[#90CFF7] rounded-full md:px-3">
          <img src={heroImage} alt="" className="relative md:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
