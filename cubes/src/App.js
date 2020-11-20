import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';

import { add_cube, change_odd, set_easter_egg, shuffle, stop_odd } from './actions/actions-types';

import Button from './Styles/Button';
import { Cube } from './Styles/Cube'

const App = () => {
  const { cubes, number, easter_eggs, frequency_easter_eggs } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if( number > 0 && number % frequency_easter_eggs === 0 ){
      dispatch(set_easter_egg(number))
    }
  }, [number]);

  const canvasStyle = {
    width: '100vw',
    height: '100vh'
  }

  console.log(easter_eggs, cubes.map((cube, i) => easter_eggs.includes(cube.number)))
  return (
    <div className="App">
      <Button onClick={() => dispatch(add_cube())}>
        Ajouter un cube
      </Button>
      <Button onClick={() => dispatch(shuffle())}>
        Shuffle
      </Button>
      <Button onClick={() => dispatch(change_odd())}>
        Activer une animation
      </Button>
      <Button onClick={() => dispatch(stop_odd())}>
        Stop l'animation
      </Button>
      <Canvas style={canvasStyle}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {cubes.length > 0 &&
                cubes.map((cube, i) => <Cube key={i} easterEgg={easter_eggs.includes(cube.number)} position={cube.position} stop={cube.stop}/>)}
      </Canvas>
    </div>
  );
}

export default App;