import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

import { useInView } from "../../hooks/use-in-view";

const COMPUTER_MODEL = "/desktop_pc/scene.gltf";
useGLTF.preload(COMPUTER_MODEL);

type ComputersProps = {
  isMobile: boolean;
  onReady: () => void;
};

const Computers = ({ isMobile, onReady }: ComputersProps) => {
  const computer = useGLTF(COMPUTER_MODEL);
  const renderedFrames = useRef(0);
  useFrame(() => {
    // Remove the matching poster only after the loaded scene has drawn.
    if (++renderedFrames.current === 2) requestAnimationFrame(onReady);
  });

  return (
    <mesh>
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={1.2} groundColor="#242038" />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.42 : 0.75}
        position={isMobile ? [-4, -2, -2.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const { ref, isInView } = useInView({ initialVisible: true });
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  );
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-computer-canvas absolute inset-0 z-0 pointer-events-none md:pointer-events-auto"
      data-scene-ready={ready}
    >
      <img
        src="/desktop_pc/preview.webp"
        alt=""
        aria-hidden="true"
        className={`hero-computer-poster${ready ? " is-ready" : ""}`}
        fetchPriority="high"
      />
        <Canvas
          // Start drawing without waiting for an OrbitControls interaction.
          // Keep the loaded scene mounted, but stop drawing off screen.
          frameloop={isInView ? "always" : "never"}
          shadows={!isMobile}
          dpr={isMobile ? 1 : [1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{
            preserveDrawingBuffer: !isMobile,
            alpha: true,
            antialias: !isMobile,
            powerPreference: isMobile ? "low-power" : "high-performance",
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          style={{
            background: "transparent",
            touchAction: "pan-y",
            pointerEvents: isMobile ? "none" : "auto",
          }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={!isMobile}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} onReady={onReady} />
          </Suspense>
        </Canvas>
    </div>
  );
};

export default ComputersCanvas;
