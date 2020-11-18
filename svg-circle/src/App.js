import './App.css';
import { Fragment, useReducer } from 'react';
import { initialState, reducer } from './reducers/circle';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { nbCircles } = state

  const svg = <svg height="100" width="100" ><circle cx="50" cy="50" r="25" stroke="black" class="sc-cOajty gxZIjd"></circle><text x="50" y="50">0</text></svg>
  
  const drawCircles = () => {
    const circles = []
    for(let i=0; i< nbCircles; i++){
      circles.push(svg)
    }
    return circles
  }
  
  return (
    <Fragment>
      <div className="App">
        <h1>Hello to the svg circle project</h1>
        <button onClick={e => dispatch({type:'ADD_CIRCLE'})}>ADD CIRCLE TEST</button>
        <br /> 
        {drawCircles().map((circle) => circle)}
      </div>
    </Fragment>
  );
}

export default App;
