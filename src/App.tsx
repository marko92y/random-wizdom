import React from "react";
import "./App.scss";
import Cursor from "./Components/Cursor";
import { Canvas } from "@react-three/fiber";
import Scene from "./Components/Scene";

function App() {
  return (
    <>
      <Cursor />
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
