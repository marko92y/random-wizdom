import * as THREE from "three";

export default function Earth() {
  return (
    <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
      <circleGeometry args={[50, 20]} />
      <meshStandardMaterial
        color="blue"
        roughness={0.01}
        metalness={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
