"use client";
import { PixelatedCanvas } from "../components/pixelated-canvas";
import { OrbitingCircles } from "../components/OrbitingCircles";
import {
  frameworkIcons,
  additionalSkills,
  ModernIcon,
  additionalSkills2,
} from "../components/FrameWorks";
import { motion } from "framer-motion";
export function GasserProfileImage() {
  return (
    <div className="mt-8 flex items-center justify-center w-full h-fit relative min-h-[1000px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <OrbitingCircles iconSize={80} radius={400} strokeWidth={1} speed={1.2}>
          {frameworkIcons.map((framework, index) => (
            <ModernIcon key={index} framework={framework} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={35}
          radius={320}
          reverse
          speed={2.8}
          strokeWidth={1}
        >
          {additionalSkills.map((skill, index) => (
            <ModernIcon key={index} framework={skill} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={35}
          radius={500}
          reverse
          speed={2.8}
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
          width={400}
          height={500}
          cellSize={2}
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
