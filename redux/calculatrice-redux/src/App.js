import {
  useDispatch,
  useSelector
} from 'react-redux';

const App = () => {

  const { message } = useSelector(state => state);

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;