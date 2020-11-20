
import { Fragment, useRef, useState } from 'react'

import { useFrame } from 'react-three-fiber'

import { Text } from 'drei'

export const Cube = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if(props.stop === false){
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
    <Fragment>
      <mesh
        position={props.position}
        ref={mesh}
        scale={active || props.easterEgg ? [1.5, 1.5, 1.5] : [0.4, 0.4, 0.4]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? `orange` : `rgb(${props.number * 15}, ${props.number * 5}, ${props.number})`} />
      </mesh>
      <Text color="black" position={[props.position[0] * 0.45, props.position[1] * 0.45, 0.6] } >
        { props.number.toString() }
      </Text>
    </Fragment>
    )
  }

