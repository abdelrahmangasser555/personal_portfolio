import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useState, useCallback } from "react";
import Loader from "../components/Loader";

const Hero = ({ setLoading, loading }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleImagesLoaded = useCallback(() => {
    setImagesLoaded(true);
  }, []);

  const handleModelLoaded = useCallback(() => {
    setModelLoaded(true);
  }, []);

  // Update parent loading state when both images and model are loaded
  React.useEffect(() => {
    if (imagesLoaded && modelLoaded && setLoading) {
      setLoading(false);
    }
  }, [imagesLoaded, modelLoaded, setLoading]);
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      {!loading && (
        <>
          <HeroText />
          <ParallaxBackground onImagesLoaded={handleImagesLoaded} />
        </>
      )}
      {/* Always render ParallaxBackground for image preloading even when loading */}
      {loading && <ParallaxBackground onImagesLoaded={handleImagesLoaded} />}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
                setLoading={handleModelLoaded}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
