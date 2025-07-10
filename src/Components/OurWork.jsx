import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductOne from "../../public/ProductOne.jpg";
import Producttwo from "../../public/producttwo.mp4";
import Productthree from "../../public/productThree.webp";
import Productfour from "../../public/productFoure.jpg";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const OurWorkItems = [
  {
    iD: 1,
    image: ProductOne,
    title: "De Online Psycholoog",
    descrip: "Website, Logo design, Photography",
    type: "image",
  },
  {
    iD: 2,
    image: Producttwo,
    title: "Loop Earplugs",
    descrip: "Webdesign, Branding, E-commerce, UX/UI",
    type: "video",
  },
  {
    iD: 3,
    image: Productthree,
    title: "Apostrophe",
    descrip: "Website, Logo design, Photography",
    type: "image",
  },
  {
    iD: 4,
    image: Productfour,
    title: "Pad Thai",
    descrip: "Branding, E-commerce, UX/UI",
    type: "image",
  },
];

const OurWork = () => {
  const spanCursorRefs = useRef([]);
  const CustomCursor = useRef([]);
  const productItemsRef = useRef([]);
  const videoRef = useRef([]);
  const imageRef = useRef([]);
  const headingRef = useRef([]);

  const productMouseMove = (index, e) => {
    const el = CustomCursor.current[index];
    const item = productItemsRef.current[index];
    const video = videoRef.current[index];
    const image = imageRef.current[index];

    if (el || item) {
      let bounds = item.getBoundingClientRect();
      const moveX = e.clientX - bounds.left;
      const moveY = e.clientY - bounds.top;

      gsap.to(el, {
        scale: 1,
        x: moveX - 100,
        y: moveY - 50,
        duration: 0.8,
        ease: "power1.out",
      });
    }
    if (video || image) {
      gsap.to(video, {
        scale: 1.2,
        duration: 0.5,
        onStart: () => video.play(),
      });

      gsap.to(image, {
        scale: 1.2,
        duration: 0.8,
      });
    }
  };
  const productMouseLeave = (index) => {
    const el = CustomCursor.current[index];
    const video = videoRef.current[index];
    const image = imageRef.current[index];
    if (el) {
      gsap.to(el, {
        scale: 0,
        duration: 0.8,
      });
    }

    if (video || image) {
      gsap.to(video, {
        scale: 1,
        duration: 0.5,
        onStart: () => {
          video.pause();
          video.currentTime = 0;
        },
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.8,
      });
    }
  };

  useEffect(() => {
    spanCursorRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          xPercent: -100,
          duration: 5,
          ease: "linear",
          repeat: -1,
        });
      }
    });

    headingRef.current.forEach((char, index) => {
      gsap.fromTo(
        char,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current[1],
            start: "top 99%",
            end :"top 40%",
            markers: true,
            scrub:true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full">
      <div>
        <h2 className="text-center text-white leading-[0.9] uppercase text-[10vw] font-semibold over">
          <span
            ref={(el) => (headingRef.current[0] = el)}
            className="block "
          >
            featured
          </span>
        </h2>
        <h2 className="text-center text-white leading-[0.9] uppercase text-[10vw] font-semibold overflow-hidden ">
          <span
            ref={(el) => (headingRef.current[1] = el)}
            className="block "
          >
            work
          </span>
        </h2>
      </div>

      <div className=" py-10 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {OurWorkItems.map((items, index) => {
          const isVideo = items.type === "video";

          return (
            <div key={index} className="flex flex-col text-white relative">
              <div
                onMouseMove={(e) => productMouseMove(index, e)}
                onMouseLeave={() => productMouseLeave(index)}
                ref={(el) => (productItemsRef.current[index] = el)}
                className="  h-[400px] md:h-[800px] relative overflow-hidden cursor-pointer rounded-4xl"
              >
                <div
                  ref={(el) => (CustomCursor.current[index] = el)}
                  className="absolute top-5 left-5 bg-[#D6FB06] py-1 px-4 rounded-full font-mono text-lg font-bold overflow-hidden whitespace-nowrap text-black  scale-1  pointer-events-none  z-50"
                >
                  <div
                    className="inline-block whitespace-nowrap"
                    ref={(el) => (spanCursorRefs.current[index] = el)}
                  >
                    <span className="mx-2">{items.title}</span>
                    <span className="mx-2 absolute">{items.title}</span>
                  </div>
                </div>

                {isVideo ? (
                  <video
                    ref={(el) => (videoRef.current[index] = el)}
                    src={items.image}
                    className="rounded-4xl w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    ref={(el) => (imageRef.current[index] = el)}
                    src={items.image}
                    alt=""
                    className="rounded-4xl w-full h-full object-cover"
                  />
                )}
              </div>

              <h4 className="font-mono text-2xl md:text-5xl ml-5 py-2 md:py-3">
                {items.title}
              </h4>
              <p className="ml-5 opacity-65 text-lg md:text-xl">
                {items.descrip}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWork;
