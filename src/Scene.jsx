import { Environment, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import { Suspense } from 'react';
import Earth from "./Earth";
import DutchShip from "./DutchShip";

function Scene() {
  return (
    <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
        <OrbitControls />

        <Environment
            files={process.env.PUBLIC_URL + '/textures/envmap.hdr'}
            background={"both"}
        />
        <Earth />
        <DutchShip />
    </Suspense>
  )
}

export default Scene