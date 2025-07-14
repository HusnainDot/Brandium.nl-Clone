import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const HeadingText = ({ headingOne , headingTwo}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: "chars" });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      rotate: "20deg",
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
      },
    });

    // Optional cleanup
    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="w-full">
      <h2
        ref={textRef}
        className=" text-center leading-[0.9] uppercase text-[10vw] font-semibold"
      >
        {headingOne} <br /> {headingTwo}
      </h2>
    </div>
  );
};

export default HeadingText;
