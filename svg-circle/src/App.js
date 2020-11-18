import './App.css';
import { Fragment, useReducer } from 'react';
import { initialState, reducer } from './reducers/circle';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { circles } = state

  const svg = (id) => {
    return <svg height="100" key={id} width="100" ><circle cx="50" cy="50" r="25" stroke="black" fill="green" class="sc-cOajty gxZIjd"></circle><text x="50" y="50">{id}</text></svg>;
}
  console.log(circles)
  const drawCircles = () => {
    const circlesToDisplay = []
    for(let i=0; i < Object.keys(circles).length; i++){
      circlesToDisplay.push(svg(circles[i].id))
    }
    return circlesToDisplay
  }
  
  return (
    <Fragment>
      <div className="App">
        <h1>Hello to the svg circle project</h1>
        <button onClick={e => dispatch({type:'ADD_CIRCLE', payload: 'CIRCLE'})}>ADD CIRCLE TEST</button>
        <button onClick={e => dispatch({type:'SHUFFLE'})}>Shuffle</button>
        <br /> 
        {drawCircles().map((circle) => circle)}
      </div>
    </Fragment>
  );
}

export default App;
