import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import AnimateButton from "./AnimateButton";
import PText from "./PText";
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  return (
    <div className="w-full">
      <div>
        <h3 className="text-lg text-[#D6FB06] pb-5 font-semibold ml-2.5 md:ml-0">
          What we do
        </h3>
        <div className="">
          <PText
            text={
              "At Brandium® we craft strong brand identities, visually striking website designs, and impactful marketing campaigns that go beyond theordinary. We transform your business into a digital powerhouse."
            }
            classes={
              "text-white  md:max-w-[80%] text-3xl md:text-[4em] leading-tight pb-10 ml-2.5"
            }
          />
        </div>
        <p className="text-white  md:max-w-[80%] text-3xl md:text-[4em] leading-tight pb-10 ml-2.5"></p>

        <div className="flex items-center py-3 w-fit px-4 gap-2.5 bg-white rounded-full md:mb-10 ml-2.5 cursor-pointer relative">
          <AnimateButton title={"i'm ready to grow"} />
        </div>

        <Line />
      </div>
    </div>
  );
};

export default AboutUsSection;
