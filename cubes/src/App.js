import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { add_cube, change_odd, easter_egg, shuffle, stop_odd } from './actions/actions-types';

import Button from './Styles/Button';

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
      <ul>
    {cubes.map((cube) => <li>{cube.number}, {cube.stop}</li>)}
      </ul>
    </div>
  );
}

export default App;