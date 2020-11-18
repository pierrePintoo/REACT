import './App.css';
import { Fragment, useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducers/circle';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { circles, animation } = state

  const svgCircle = (id) => {
    return(
      <svg height="100" width="100" key={id}>
        <circle cx="50" cy="50" r="25" stroke="black" fill="green" class="sc-cOajty gxZIjd"></circle>
        <text x="50" y="50">{id}</text>
      </svg>
    )
  }
  
  const svgRect = (id) => {
    return  <svg width="200" key={id} height="100">hello<rect width="100" height="100" fill="blue"></rect>  <text x="50" y="50">{id}</text></svg> 
  }
  const draw = () => {
    console.log(circles)
      return circles.map((circle) => {
            if(circle.name === "SQUARE"){
              return svgRect(circle.id)
            } else {
              return svgCircle(circle.id)
            }
    })
  }
  useEffect(() => {
      console.log(circles)
      if(circles.length > 0 && circles[circles.length - 1].id === 2){
        console.log('WESH')  
        circles[circles.length - 1].name = "SQUARE"
      }
  }, [circles])
  
    return (
      <Fragment>
        <div className="App">
          <h1>Hello to the svg circle project</h1>
          <button onClick={e => dispatch({type:'ADD_CIRCLE', payload: 'CIRCLE'})}>ADD CIRCLE TEST</button>
          <button onClick={e => dispatch({type:'SHUFFLE'})}>Shuffle</button>
          <button onClick={e => dispatch({type:'START_ODD'})}>Animation des chiffres impairs</button>
          <br />
          {draw()}
        </div>
      </Fragment>
    );
}

export default App;
