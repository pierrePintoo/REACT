import styled, { keyframes } from 'styled-components'

import { useRef, useState } from 'react'

import { useFrame } from 'react-three-fiber'

const pulse = keyframes`
    0% {
    fill:#10aded;
    stroke-width:10px
    }
    50% {
    fill:#bada55;
    stroke-width:2px
    }
    100%{
    fill:#10aded;
    stroke-width:10px
    }
`;

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
    console.log(props.easterEgg)

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active || props.easterEgg ? [1.5, 1.5, 1.5] : [0.4, 0.4, 0.4]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

