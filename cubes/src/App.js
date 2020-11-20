import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';

import { add_cube, change_odd, easter_egg, shuffle, stop_odd } from './actions/actions-types';

import Button from './Styles/Button';
import { Cube } from './Styles/Cube'

const App = () => {
  const { cubes, number, frequency_easter_eggs } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if( number > 0 && number % frequency_easter_eggs === 0 ){
      dispatch(easter_egg())
    }
  }, [number]);

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
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {cubes.length > 0 &&
                cubes.map((cube, i) => <Cube key={i} position={[cube.cx, 1, 0]}/>)}
      </Canvas>
    </div>
  );
}

export default App;