import React, { useEffect, useState } from "react";
import Fixed from "./Components/Fixed";
import MainSection from "./Components/MainSection";
import AboutUsSection from "./Components/AboutUsSection";
import OurWork from "./Components/OurWork";
import Line from "./Components/Line";
import HeadingText from "./Components/HeadingText";
import Insights from "./Components/Insights";

const Home = () => {
  let [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-smooth overflow-hidden">
        <Fixed scrollPercent={scrollPercent} />
        <MainSection />

        <div className="absolute w-full bg-black rounded-t-[60px] md:rounded-t-[200px]  -translate-y-[2%] md:-translate-y-[10%] overflow-hidden ">
          <div className=" relative px-5 md:px-10 2xl:px-50  pt-20 md:pt-50 ">
            <AboutUsSection />
            <OurWork />
          </div>
          <div className="relative pl-5 md:pl-10 2xl:pl-50  pt-20 md:pt-50 rounded-t-[60px] md:rounded-t-[200px] w-full left-0 py-16 bg-white text-black z-50">
            <Insights />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
