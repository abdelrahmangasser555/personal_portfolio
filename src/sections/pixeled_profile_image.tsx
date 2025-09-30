"use client";
import { PixelatedCanvas } from "../components/pixelated-canvas";
import { OrbitingCircles } from "../components/OrbitingCircles";
import { useMediaQuery } from "react-responsive";

import {
  frameworkIcons,
  additionalSkills,
  ModernIcon,
  additionalSkills2,
} from "../components/Frameworks";

import { motion } from "framer-motion";

// Configuration for different screen sizes
const mobileConfig = {
  orbits: {
    outer: { iconSize: 50, radius: 200, speed: 1.2 },
    middle: { iconSize: 25, radius: 140, speed: 2.8 },
    inner: { iconSize: 25, radius: 260, speed: 2.8 },
  },
  pixelImage: {
    width: 220,
    height: 200,
    cellSize: 3,
  },
  container: {
    minHeight: 700,
  },
};

const desktopConfig = {
  orbits: {
    outer: { iconSize: 80, radius: 400, speed: 1.2 },
    middle: { iconSize: 35, radius: 320, speed: 2.8 },
    inner: { iconSize: 35, radius: 500, speed: 2.8 },
  },
  pixelImage: {
    width: 400,
    height: 500,
    cellSize: 2,
  },
  container: {
    minHeight: 1000,
  },
};

export function GasserProfileImage() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const config = isMobile ? mobileConfig : desktopConfig;

  return (
    <div
      className="mt-8 flex items-center justify-center w-full h-fit relative"
      style={{ minHeight: `${config.container.minHeight}px` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <OrbitingCircles
          iconSize={config.orbits.outer.iconSize}
          radius={config.orbits.outer.radius}
          strokeWidth={1}
          speed={config.orbits.outer.speed}
        >
          {frameworkIcons.map((framework, index) => (
            <ModernIcon key={index} framework={framework} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={config.orbits.middle.iconSize}
          radius={config.orbits.middle.radius}
          reverse
          speed={config.orbits.middle.speed}
          strokeWidth={1}
        >
          {additionalSkills.map((skill, index) => (
            <ModernIcon key={index} framework={skill} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={config.orbits.inner.iconSize}
          radius={config.orbits.inner.radius}
          reverse
          speed={config.orbits.inner.speed}
          strokeWidth={1}
        >
          {additionalSkills2.map((skill, index) => (
            <ModernIcon key={index} framework={skill} />
          ))}
        </OrbitingCircles>
      </div>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="z-10"
      >
        <PixelatedCanvas
          src="/assets/gasser 1.jpg"
          width={config.pixelImage.width}
          height={config.pixelImage.height}
          cellSize={config.pixelImage.cellSize}
          dotScale={0.5}
          shape="square"
          backgroundColor="#0000"
          dropoutStrength={0.24}
          interactive
          distortionStrength={1}
          distortionRadius={80}
          distortionMode="swirl"
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={4}
          sampleAverage
          tintColor="#00000"
          tintStrength={0.2}
          className="rounded-xl border border-neutral-800 shadow-lg z-10 bg-black"
        />
      </motion.div>

      {/* Overlay to hide bottom half of orbiting circles */}
      <div className="absolute -bottom-5 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black to-transparent z-20 pointer-events-none" />
    </div>
  );
}
