import { Suspense } from "react";
import Cursor from "./Components/Cursor";
import { Canvas } from "@react-three/fiber";
import Scene from "./Components/Scene";

function App() {
  return (
    <Suspense
      fallback={
        <>
          Loading...
          <br />
          Welcome
        </>
      }
    >
      <Cursor />
      <Canvas>
        <Scene />
      </Canvas>
    </Suspense>
  );
}

export default App;
