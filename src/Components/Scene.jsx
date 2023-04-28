import { Environment, OrbitControls, PerspectiveCamera, Float} from '@react-three/drei';
import { Suspense } from 'react';
import Earth from "./Earth";
import DutchShip from "./DutchShip";
import Portal , {podcasts} from './Portal';


function Scene() {
  return (
    <Suspense fallback={null}>
        <PerspectiveCamera far={10000}   target={[0,0, 0]} makeDefault position={[-60, 0, 120]} fov={50}/>
        <OrbitControls 
        target={[0, 35, 0]}
        maxPolarAngle={Math.PI - Math.PI / 2}
        />

        <Environment
            files={process.env.PUBLIC_URL + '/textures/envmap.hdr'}
            background={"both"}
        />
        <Float speed={0.5}>
        <Earth />
        <DutchShip rotation={[0, 1, 0]} />
        </Float>
        {podcasts.map((podcast, index) => (<Portal key={index} podcast={podcast}/>))}
        
    </Suspense>
  )
}

export default Scene