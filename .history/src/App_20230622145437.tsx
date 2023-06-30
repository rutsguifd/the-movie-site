import { filmAPI } from "./store/services/FilmService";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Popcorn from "./Scene";

function App() {
  const { data } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: "superman",
    page: 1,
  });
  console.log(data);

  return (
    <div>
      xd
      <Canvas style={height: "100vh"}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} />
        <Popcorn />
      </Canvas>
    </div>
  );
}

export default App;
