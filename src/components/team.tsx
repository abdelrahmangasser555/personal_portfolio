"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  {
    id: 1,
    name: "Abdelrahman Gasser",
    designation: "Founder & CEO",
    image: "/assets/gasser 1.jpg",
  },
  {
    id: 2,
    name: "Gasser Mahmoud",
    designation: "Full Stack Developer",
    image: "/assets/gasser mahmoud.png",
  },
  {
    id: 3,
    name: "Fares Wael",
    designation: "Full Stack Developer",
    image: "/assets/fares.png",
  },
  {
    id: 4,
    name: "Ahmed Tamer",
    designation: "UI&UX Designer",
    image: "/assets/moshka.png",
  },
];

export function Team({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-row items-center justify-center mb-10 w-full ${className}`}
    >
      <AnimatedTooltip items={people} />
    </div>
  );
}
