import React from "react";

const ModernLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Loading text with typing effect */}
      <div className="text-white text-xl font-mono tracking-wider">
        <span className="animate-pulse">Initializing Portfolio...</span>
      </div>
    </div>
  );
};

export default ModernLoader;
