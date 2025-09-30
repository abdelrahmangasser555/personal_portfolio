import React from "react";

const TechStack = ({ tags }) => {
  return (
    <div className="flex -space-x-2">
      {tags.map((tag, index) => (
        <div
          key={tag.id}
          className="group relative"
          style={{ zIndex: tags.length - index }}
        >
          <div
            className={`relative w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-white dark:bg-gray-700 shadow-lg overflow-hidden  duration-200 hover:scale-110 hover:z-50 ${
              tag?.id === 1
                ? "hover:mr-2"
                : tags.length / 2 <= tag?.id
                ? "hover:ml-1"
                : "hover:mr-0"
            }  transition-all ease-in-out `}
          >
            <img
              src={tag.path}
              alt={tag.name}
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback text if image fails */}
            <div className="absolute inset-0 hidden items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600">
              {tag.name.charAt(0)}
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
            {tag.name}
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
