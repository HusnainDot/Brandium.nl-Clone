import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { gsap } from "gsap";

const AboutUsSection = () => {
  const readyArrow = useRef();
  const readyBg = useRef();
  const lineRef = useRef();
  const linePathRef = useRef();
  const [lineWidth, setLineWidth] = useState(0);
  let LineFinalPath = `M 0 150 Q 750 150 ${lineWidth} 150`;
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
        x: -10,
        y: 10,
        opacity: 1,
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

  const lineMouseMove = (e) => {
    const bounds = lineRef.current.getBoundingClientRect();

    let moveX = e.clientX;
    const moveY = e.clientY - bounds.top;

    let fromY = (moveY / bounds.height) * 500 - 150;
    console.log(`from y ${fromY} and from x ${moveX}`);

    gsap.to(linePathRef.current, {
      attr: {
        d: `M 0 150 Q ${moveX} ${fromY} ${lineWidth} 150`,
      },
    });
  };
  const lineMouseLeave = () => {
    gsap.to(linePathRef.current, {
      attr: {
        d: LineFinalPath,
      },

      ease: "bounce.out",
    });
  };

  useEffect(() => {
    if (lineRef.current) {
      setLineWidth(lineRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full">
      <div>
        <h3 className="text-lg text-[#D6FB06] pb-5 font-semibold">
          What we do
        </h3>

        <p className="text-white max-w-[80%] text-[4em] leading-tight pb-10 ml-2.5">
          At Brandium® we craft strong brand identities, visually striking
          website designs, and impactful marketing campaigns that go beyond the
          ordinary. We transform your business into a digital powerhouse.
        </p>

        <div className="flex items-center py-3 w-fit px-4 gap-2.5 bg-white rounded-full mb-10 ml-2.5 cursor-pointer relative">
          <div
            onMouseEnter={readyMouseEnter}
            onMouseLeave={readyMouseLeave}
            className="absolute w-full h-full left-0 rounded-full z-50 pointer-events-auto"
          ></div>

          <h3 className="text-xl py-0 relative z-20">I'm ready to grow</h3>

          <div
            ref={readyBg}
            className="h-[15px] w-[15px] bg-[#D6FB06] rounded-full absolute z-[0] left-[85%]"
          ></div>

          <div className="overflow-hidden">
            <div ref={readyArrow} className="-rotate-45 z-20 opacity-0">
              <GrLinkNext />
            </div>
          </div>
        </div>

        <div ref={lineRef} className="h-[300px] w-full ">
          <svg
            onMouseMove={lineMouseMove}
            onMouseLeave={lineMouseLeave}
            viewBox={`0 0 ${lineWidth} 300`}
            className="w-full h-full"
          >
            <path
              ref={linePathRef}
              d={`M 0 150 Q 750 150 ${lineWidth} 150`}
              stroke="white"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
