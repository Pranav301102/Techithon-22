import {Ground, Rig, Triangle} from './background-scene'

export function Model(){
    return(
    <Rig>
        <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
        <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
        <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
        <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
        <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} /> 
    </Rig>
    );
}