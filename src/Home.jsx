import React, { useEffect, useState } from "react";
import Fixed from "./Components/Fixed";

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
      <div className="">
        <Fixed scrollPercent={scrollPercent} />

        <div className="w-full h-screen bg-white "></div>
        <div className="w-full h-screen bg-cyan-400 "></div>
        <div className="w-full h-screen bg-teal-400 "></div>
        <div className="w-full h-screen bg-green-400 "></div>
      </div>
    </>
  );
};

export default Home;
