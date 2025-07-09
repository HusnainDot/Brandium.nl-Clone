import React, { useEffect, useRef } from "react";
import bgimage from "../../public/bran-hero1-scaled.jpg";
import textTaxture from "../../public/text_taxture.png";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const heading = ["We", "Design", "Digital", "Experiences"];

const MainSection = () => {
  const textAnimationRef = useRef([]);
  const textSplit = useRef([]);

  useEffect(() => {
 
      
      
      
    gsap.fromTo(
      textAnimationRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        delay:1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
      
      
  }, []);
  return (
    <div className=" relative overflow-hidden md:overflow-visible  ">
      <img
        src={bgimage}
        alt=""
        className="   min-h-[150%]  min-w-[150%]  md:min-w-auto md:min-h-auto  "
      />

      <div className="absolute z-20 top-[25%] md:top-10 left-5 md:left-10">
        {heading.map((text, index) => (
          <div key={index}>
            <div className="relative overflow-hidden h-fit">
              <h1
                ref={(el) => (textAnimationRef.current[index] = el)}
                className="text-[16vw] font-medium text-transparent bg-clip-text bg-cover bg-center leading-[0.88em]  text-nowrap"
                style={{ backgroundImage: `url(${textTaxture})` }}
              >
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
