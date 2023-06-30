import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Popcorn from "./Scene";

const PopcornScene = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[-4, 5, 2]} intensity={1} />
      <Suspense fallback={null} />
      <Popcorn />
    </Canvas>
  );
};

export default PopcornScene;
