import { motion } from "motion/react";

const Card = ({
  style,
  text,
  image,
  containerRef,
  variant = "primary",
  icon,
  size = "medium",
}) => {
  const variantClasses = {
    primary:
      "text-blue-300 bg-blue-900/20 border border-blue-500/30 hover:bg-blue-900/30",
    secondary:
      "text-gray-300 bg-gray-900/20 border border-gray-500/30 hover:bg-gray-900/30",
    success:
      "text-emerald-300 bg-emerald-900/20 border border-emerald-500/30 hover:bg-emerald-900/30",
    warning:
      "text-orange-300 bg-orange-900/20 border border-orange-500/30 hover:bg-orange-900/30",
    error:
      "text-red-300 bg-red-900/20 border border-red-500/30 hover:bg-red-900/30",
    purple:
      "text-purple-300 bg-purple-900/20 border border-purple-500/30 hover:bg-purple-900/30",
    black: "text-white bg-black/90 border border-gray-700 hover:bg-black/90",
    yellow:
      "text-yellow-300 bg-yellow-900/20 border border-yellow-500/30 hover:bg-yellow-900/30",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-xs min-w-[6rem]",
    medium: "px-3 py-2 text-sm min-w-[8rem]",
    large: "px-4 py-3 text-base min-w-[10rem]",
  };

  // If it's an image card, render the old style for now (can be modernized later)
  if (image && !text) {
    return (
      <motion.div
        className={`absolute cursor-grab backdrop-blur-sm rounded-xl p-2 ${variantClasses[variant]} transition-colors`}
        style={style}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={0.2}
        dragMomentum={false}
      >
        <img
          src={image}
          className="w-12 h-12 object-contain"
          alt="Technology"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`absolute cursor-grab backdrop-blur-sm rounded-full font-medium text-center 
        ${variantClasses[variant]} ${sizeClasses[size]} 
        flex items-center justify-center gap-1.5 transition-colors select-none`}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.02 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragMomentum={false}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{text}</span>
    </motion.div>
  );
};

export default Card;
