import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Line = () => {
  const [lineWidth, setLineWidth] = useState(0);
  let LineFinalPath = `M 0 150 Q 750 150 ${lineWidth} 150`;
  const lineRef = useRef();
  const linePathRef = useRef();
  const lineMouseMove = (e) => {
    const bounds = lineRef.current.getBoundingClientRect();

    let moveX = e.clientX;
    const moveY = e.clientY - bounds.top;

    let fromY = (moveY / bounds.height) * 500 - 150;

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
    <>
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
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
};

export default Line;
