import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';

import { add_cube, change_odd, set_easter_egg, shuffle, stop_odd } from './actions/actions-types';

import Button from './Styles/Button';
import { Cube } from './Styles/Cube'

const App = () => {
  const cubes = useSelector(state => state);
  const {easter_eggs} = cubes
  const FREQUENCY_EASTER_EGG = 3
  const dispatch = useDispatch();

  useEffect(() => {
    if (cubes.length === FREQUENCY_EASTER_EGG + 1 && cubes[FREQUENCY_EASTER_EGG].easterEgg === false) {
      dispatch(set_easter_egg())
    }
  }, [cubes, dispatch])

  const canvasStyle = {
    width: '100vw',
    height: '100vh'
  }

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
        {cubes.map((cube, i) => <Cube key={cube.number} easterEgg={cube.easter_eggs} index={cube.number} position={cube.position} stop={cube.stop}/>)}
      </Canvas>
      {cubes.length > 0 &&
                cubes.map((cube, i) => <li key={cube.number}>{cube.number}</li>)}
    </div>
  );
}

export default App;