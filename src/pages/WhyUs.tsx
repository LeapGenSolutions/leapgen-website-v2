import React, { useEffect, useState } from "react";
import globeImage from "../assets/globe-image.png";
import Logo from "../assets/logo.png";

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });
    observer.observe(document.querySelector(".custom-border-container"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex items-center justify-center p-10 bg-[#07020e] pt-[80px]">
      <div
        className={`relative z-10 flex flex-row flex-wrap max-md:flex-col max-md:w-fit items-center p-10 bg-[#07020e] rounded-xl custom-border-container`}
      >
        <div
          className={`max-w-lg text-white mb-8 md:mb-0 gap-[20px] flex flex-col about_div1 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h1 className="text-[40px] max-md:text-[25px] font-normal text-[#FFBFFF]">
            Why Us?
          </h1>
          <p className="text-base text-[16px] max-md:text-[14px]">
            Leapgen.AI is a trusted partner for businesses seeking to revolutionize their operations, offering a suite of specialized AI-powered solutions like SurroundAI for customer support automation, DataCoffee for secure data governance with synthetic data, and Seismic for streamlined clinical documentation. What sets us apart is our commitment to delivering tangible results for businesses of all sizes, with a proven track record of helping organizations achieve an average cost reduction of 60%, a remarkable 99.9% uptime, and rapid implementation within 30-90 days. We don't just offer technology; we provide a clear pathway to efficiency and compliance, ensuring your business stays ahead in a competitive landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
