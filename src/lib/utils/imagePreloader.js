import React from "react";

/**
 * Preloads an array of images and returns a promise that resolves when all images are loaded
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Promise<void>} - Promise that resolves when all images are loaded
 */
export const preloadImages = (imageUrls) => {
  return new Promise((resolve, reject) => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
      resolve();
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        resolve();
      }
    };

    const handleImageError = (url) => {
      console.warn(`Failed to load image: ${url}`);
      loadedCount++;
      if (loadedCount === totalImages) {
        resolve(); // Resolve anyway to prevent blocking
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(url);
      img.src = url;
    });
  });
};

/**
 * Hook to preload images and track loading state
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {boolean} - Loading state
 */
export const useImagePreloader = (imageUrls) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    preloadImages(imageUrls)
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false); // Set to false even on error to prevent infinite loading
      });
  }, [imageUrls]);

  return isLoading;
};
