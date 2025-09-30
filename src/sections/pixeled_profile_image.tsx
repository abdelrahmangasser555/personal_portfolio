"use client";
import { PixelatedCanvas } from "../components/pixelated-canvas";
export function GasserProfileImage() {
  return (
    <div className=" mt-8 flex items-center justify-center w-full ">
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
        className="rounded-xl border border-neutral-800 shadow-lg"
      />
    </div>
  );
}
