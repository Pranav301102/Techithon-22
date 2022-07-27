import * as THREE from 'three'
import { useState, useRef,  useMemo } from 'react'
import {  useThree, useFrame, useLoader } from '@react-three/fiber'
import { Reflector, useTexture, Html ,useScroll } from '@react-three/drei'


import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

function Triangle({ color, ...props }) {
    const ref = useRef()
    const [r] = useState(() => Math.random() * 10000)
    useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
    const { paths: [path] } = useLoader(SVGLoader, '/triangle.svg') // prettier-ignore
    const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
    return (
      <group ref={ref}>
        <mesh geometry={geom} {...props}>
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      </group>
    )
  }
  
  function Rig({ children }) {
    const ref = useRef()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    const scroll = useScroll()
    const offset = 1 - scroll.offset
    console.log(offset)
    useFrame(() => {
      // camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
      camera.position.lerp(vec.set(mouse.x * 2 , 0, 3.5), 0.05)
      ref.current.position.lerp(vec.set(mouse.x * 1 + 1, mouse.y * 0.1, 0), 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
      camera.lookAt(vec.set(0, 0, 0))
    })
    return <group ref={ref}>{children}</group>
  }
  
  function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
      <Reflector resolution={1024} args={[8, 8]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
      </Reflector>
    )
  }

  export {Ground, Rig, Triangle}