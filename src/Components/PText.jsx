import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

const PText = ({ text, classes }) => {
  const pRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(pRef.current, { type: "words" });

    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: pRef.current,
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
      <p ref={pRef} className={`${classes}`}>
        {text}
      </p>
    </div>
  );
};

export default PText;
