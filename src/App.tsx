import { Suspense } from "react";
import Cursor from "./Components/Cursor";
import { Canvas } from "@react-three/fiber";
import Scene from "./Components/Scene";
import { Loader } from "@react-three/drei";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Cursor />
      <Canvas>
        <Scene />
      </Canvas>
    </Suspense>
  );
}

export default App;
