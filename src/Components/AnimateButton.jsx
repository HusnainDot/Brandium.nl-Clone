import React, { useRef } from "react";
import { gsap } from "gsap";
import { GrLinkNext } from "react-icons/gr";

const AnimateButton = ({ title }) => {
  const readyArrow = useRef();
  const readyBg = useRef();
  const readyMouseEnter = () => {
    gsap.to(readyBg.current, {
      width: "100%",
      height: "100%",
      left: 0,
    });

    gsap.fromTo(
      readyArrow.current,
      {
        scale: 1,
        x: -20,
        y: 20,
        opacity: 1,
        delay: 0.8,
      },
      {
        x: 10,
        y: -10,
        duration: 0.8,
        repeat: -1,
      }
    );
  };

  const readyMouseLeave = () => {
    gsap.to(readyArrow.current, {
      scale: 0,
    });

    gsap.to(readyBg.current, {
      width: "15px",
      height: "15px",
      left: "85%",
    });
  };
  return (
    <>
      <div
        onMouseEnter={readyMouseEnter}
        onMouseLeave={readyMouseLeave}
        className="absolute w-full h-full left-0 rounded-full z-50 pointer-events-auto"
      ></div>

      <h3 className="text-xl py-0 relative z-20 pointer-events-none">
        {title}
      </h3>

      <div
        ref={readyBg}
        className="h-[15px] w-[15px] bg-[#D6FB06] rounded-full absolute z-[0] left-[85%]"
      ></div>

      <div className="overflow-hidden">
        <div ref={readyArrow} className="-rotate-45 z-20 opacity-0">
          <GrLinkNext />
        </div>
      </div>
    </>
  );
};

export default AnimateButton;
