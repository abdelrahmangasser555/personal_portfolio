"use client";
import React from "react";
import { SparklesCore } from "../components/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
      <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center text-white relative z-20 mb-4 sm:mb-6">
        Gasser
      </h1>
      <div className="w-full max-w-[20rem] xs:max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem] h-32 sm:h-36 md:h-40 relative">
        {/* Gradients - Responsive positioning */}
        <div className="absolute inset-x-8 sm:inset-x-12 md:inset-x-16 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-8 sm:inset-x-12 md:inset-x-16 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-16 sm:inset-x-20 md:inset-x-24 lg:inset-x-28 xl:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] sm:h-[4px] md:h-[5px] w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 blur-sm" />
        <div className="absolute inset-x-16 sm:inset-x-20 md:inset-x-24 lg:inset-x-28 xl:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4" />

        {/* Core component - Responsive particle density */}
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges - Responsive sizing */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(200px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(250px_175px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(300px_200px_at_top,transparent_20%,white)] lg:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
