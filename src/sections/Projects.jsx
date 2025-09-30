import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { PointerHighlight } from "../components/highlight_word";
import { PanelsTopLeft, Layers } from "lucide-react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <PointerHighlight
        rectangleClassName="bg-yellow-700  border-yellow-600 border-dashed"
        pointerClassName="text-yellow-400"
        containerClassName="flex items-center gap-3 mb-6 text-3xl font-bold text-white md:mb-10 md:text-5xl"
      >
        <Layers className="  font-semibold z-10" size={40} />
        <h2 className="text-heading font-semibold z-10 relative">
          My Selected Projects
        </h2>
      </PointerHighlight>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
