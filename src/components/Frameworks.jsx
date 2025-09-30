import { OrbitingCircles } from "./OrbitingCircles";
import { motion } from "motion/react";

export function Frameworks() {
  // Modern framework icons with proper styling
  const frameworkIcons = [
    {
      name: "Framer Motion",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">F</span>
        </div>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-gray-700">
          <span className="text-white font-bold text-sm">N</span>
        </div>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">T</span>
        </div>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">M</span>
        </div>
      ),
    },
  ];

  const additionalSkills = [
    {
      name: "React",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">R</span>
        </div>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">TS</span>
        </div>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">N</span>
        </div>
      ),
    },
    {
      name: "Vite",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">V</span>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={50} radius={80}>
        {frameworkIcons.map((framework, index) => (
          <ModernIcon key={index} framework={framework} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={35} radius={120} reverse speed={1.5}>
        {additionalSkills.map((skill, index) => (
          <ModernIcon key={index} framework={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const ModernIcon = ({ framework }) => (
  <motion.div
    className="relative group cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="backdrop-blur-sm bg-white/10 rounded-xl p-1 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
      {framework.icon}
    </div>
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
        {framework.name}
      </div>
    </div>
  </motion.div>
);
