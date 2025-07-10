import React, { useEffect, useState } from "react";
import Fixed from "./Components/Fixed";
import MainSection from "./Components/MainSection";
import AboutUsSection from "./Components/AboutUsSection";
import OurWork from "./Components/OurWork";

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
      <div className="scroll-smooth">
        <Fixed scrollPercent={scrollPercent} />
        <MainSection />

        <div className="bg-black rounded-t-[60px] md:rounded-t-[200px]  relative overflow-hidden  px-5  md:px-10 2xl:px-50  pt-20 md:pt-50  -translate-y-[2%] md:-translate-y-[10%]">
          <AboutUsSection />
          <OurWork />

          <div className="w-full h-screen bg-gray-400 "></div>
          <div className="w-full h-screen bg-teal-400 "></div>
          <div className="w-full h-screen bg-green-400 "></div>
        </div>
      </div>
    </>
  );
};

export default Home;
