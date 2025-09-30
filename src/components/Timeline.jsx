"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { PointerHighlight } from "./highlight_word";
import { Sparkles } from "lucide-react";

export const Timeline = ({
  data,
  containerClassName = "",
  headerClassName = "",
  timelineItemClassName = "",
  iconContainerClassName = "",
  contentClassName = "",
  dateClassName = "",
  titleClassName = "",
  jobClassName = "",
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`c-space section-spacing ${containerClassName}`}
      ref={containerRef}
      id="experience"
    >
      <PointerHighlight
        rectangleClassName="bg-purple-700  border-purple-600 border-dashed"
        pointerClassName="text-purple-400"
      >
        <div
          className={`flex items-center gap-3 mb-6 text-3xl font-bold text-white md:mb-10 md:text-5xl ${headerClassName}`}
        >
          <Sparkles size={45} className="z-10" />
          <h2 className="text-heading z-10">My Work Experience</h2>
        </div>
      </PointerHighlight>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start pt-10 md:pt-40 md:gap-10 ${
              item.className || timelineItemClassName
            }`}
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div
                className={`absolute flex items-center justify-center w-12 h-12 rounded-full -left-[19px] shadow-lg border-2 ${
                  item.iconClassName || iconContainerClassName
                }`}
                style={{
                  background: item.color
                    ? `linear-gradient(135deg, ${item.color}, ${item.color}dd)`
                    : "linear-gradient(135deg, #8b5cf6, #a855f7dd)",
                  borderColor: item.color ? `${item.color}4d` : "#a855f74d",
                }}
              >
                {typeof item.icon === "string" ? (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-15 h-15 object-contain "
                  />
                ) : (
                  <div
                    className="w-6 h-6"
                    style={{ color: item.color ? "#ffffff" : "#ffffff" }}
                  >
                    {item.icon}
                  </div>
                )}
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3 className={item.dateClassName || dateClassName}>
                  {item.date}
                </h3>
                <h3
                  className={`text-3xl text-neutral-400 ${
                    item.titleClassName || titleClassName
                  }`}
                >
                  {item.title}
                </h3>
                <h3
                  className={`text-3xl text-neutral-500 ${
                    item.jobClassName || jobClassName
                  }`}
                >
                  {item.job}
                </h3>
              </div>
            </div>

            <div
              className={`relative w-full pl-20 pr-4 md:pl-4 ${
                item.contentClassName || contentClassName
              }`}
            >
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                <h3 className={item.dateClassName || dateClassName}>
                  {item.date}
                </h3>
                <h3 className={item.jobClassName || jobClassName}>
                  {item.job}
                </h3>
              </div>
              <div className="text-neutral-400">{item.body}</div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-gray-400 via-green-500 to-yellow-400 from-[0%] via-[50%] to-[100%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
