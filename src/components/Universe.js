import React from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import starsTexture from '../img/space.jpg';
import sunTexture from '../img/sol.png';

const Universe = () => {
    const [starsTextureMap, sunTextureMap] = useLoader(THREE.TextureLoader, [starsTexture, sunTexture]);
    return (
        <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={sunTextureMap} />
        </mesh>
        {/* Adicione mais planetas aqui */}
        <mesh>
          <sphereGeometry args={[100, 32, 32]} />
          <meshBasicMaterial side={THREE.BackSide}>
            <primitive attach="map" object={starsTextureMap} repeat={[1, 1]} />
          </meshBasicMaterial>
        </mesh>
      </Canvas>
    );
  }
  
  export default Universe;
  