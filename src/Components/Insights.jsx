import React, { useEffect, useRef, useState } from "react";
import HeadingText from "./HeadingText";
import { gsap } from "gsap";

const Insights = ({ headingOne, headingTwo }) => {
  const thrive = [
    {
      title: "BRANDING & IDENTITY",
      Img: "/loop1___brandium.jpg",
    },
    {
      title: "WEB DESIGN & DEVELOPMENT",
      Img: "apost___brandium.jpg",
    },
    {
      title: "E-COMMERCE & GROWTH",
      Img: "solefits___brandium.jpg",
    },
    {
      title: "Graphic Design & Motion",
      Img: "sobo___brandium.jpg",
    },
  ];

  const imgRef = useRef(null);
  const [imgIndex, setImgIndex] = useState(0);

  const handleMouseEnter = (e, index) => {
    setImgIndex(index);
    // Animate fade/scale on image change
    gsap.fromTo(
      imgRef.current,
      { autoAlpha: 0, scale: 0.95 },
      { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  };

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    gsap.to(imgRef.current, {
      x: x - 250,
      y: y - 250,
      duration: 2,
      ease: "elastic.out(2,0.1)",
    });
  };

  return (
    <div className="w-full">
      <div className="text-black">
        <HeadingText headingOne={headingOne} headingTwo={headingTwo} />
      </div>

      <div
        onMouseMove={handleMouseMove}
        className="flex flex-col py-10 relative overflow-hidden cursor-pointer"
      >
        {thrive.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            className=""
          >
            <div className="w-full h-[3px] bg-black"></div>
            <h3 className=" text-2xl md:text-5xl text-black uppercase py-20">
              {item.title}
            </h3>
          </div>
        ))}

        {/* Follow-cursor image */}
        <img
          ref={imgRef}
          src={thrive[imgIndex].Img}
          className="absolute top-0 left-0 h-[300px] md:h-[600px] w-auto pointer-events-none z-50 opacity-0"
          alt="Preview"
        />
      </div>
    </div>
  );
};

export default Insights;
