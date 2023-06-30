import { filmAPI } from "./store/services/FilmService";
import Model from "./Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
function App() {
  const { data } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: "superman",
    page: 1,
  });
  console.log(data);

  return (
    <div>
      xd
      <Canvas>
        <OrbitControls enableZoom={false}>
          <ambientLight intensity={0.5}>
            <directionalLight position={[-2, 5, 2]} intensity={1}>
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </directionalLight>
          </ambientLight>
        </OrbitControls>
      </Canvas>
    </div>
  );
}

export default App;
