import React from "react";

const ModernLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Loading text with typing effect */}
      <div className="text-white text-xl font-mono tracking-wider">
        <span className="animate-pulse">Gasser is Loading...</span>
       
      </div>
    </div>
  );
};

export default ModernLoader;
