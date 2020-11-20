import { useDispatch, useSelector } from 'react-redux';

import { add_cube, shuffle } from './actions/actions-types';
import Button from './Styles/Button';

const App = () => {
  const { cubes } = useSelector(state => state);

  const dispatch = useDispatch();

  // const handleChange = e => {
  //   const { value , name } = e.target;

  //   dispatch(set_number({ value, name }));
  // }

  return (
    <div className="App">
      {/* <p>{message}</p> */}
      {/* <input type="text" value={number1} name="number1" onChange={handleChange} />
      <input type="text" value={number2} name="number2" onChange={handleChange} /> */}
      <Button onClick={() => dispatch(add_cube())}>
        Ajouter un cube
      </Button>
      <Button onClick={() => dispatch(shuffle())}>
        Ajouter un cube
      </Button>
      <ul>
        {cubes.map((cube) => <li>{cube.number}</li>)}
      </ul>
    </div>
  );
}

export default App;