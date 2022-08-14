import * as THREE from "three";
import { useState, useRef, useMemo } from "react";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { Reflector, useTexture } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

function Triangle({ color, ...props }) {
  const ref = useRef();
  const [r] = useState(() => Math.random() * 10000);
  useFrame(
    (_) =>
      (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10)
  );
  const { paths: [path] } = useLoader(SVGLoader, '/triangle.svg') // prettier-ignore
  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(
        path.subPaths[0].getPoints(),
        path.userData.style
      ),
    []
  );
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Rig({ children, scroll }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { mouse, camera } = useThree();
  useFrame(() => {
    const offset = scroll.current;
    // camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    camera.position.lerp(
      vec.set(
        mouse.x * 0.5 - Math.sin(offset) * 5 + 2 ,
        Math.atan(offset * Math.PI * 2) * 1,
        7 + Math.cos(offset / 3) * -2
      ),
      0.05
    );
    ref.current.position.lerp(vec.set(mouse.x * 1 + 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
    camera.lookAt(vec.set(-3 + offset*5 , 0, 0));
  });
  return <group ref={ref}>{children}</group>;
}

function Ground(props) {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector resolution={1024} args={[8, 8]} {...props}>
      {(Material, props) => (
        <Material
          color="#f0f0f0"
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

export function Model({ scroll }) {
  return (
    <Rig scroll={scroll}>
      <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
      <Triangle
        color="cyan"
        scale={0.009}
        position={[2, 0, -2]}
        rotation={[0, 0 , Math.PI / 3]}
      />
      <Triangle
        color="orange"
        scale={0.009}
        position={[-2, 0, -2]}
        rotation={[0, 0, Math.PI / 3]}
      />
      <Triangle
        color="white"
        scale={0.009}
        position={[0, 2, -10]}
        rotation={[0, 0, Math.PI / 3]}
      />
      <Ground
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position-y={-0.8}
      />
    </Rig>
  );
}
