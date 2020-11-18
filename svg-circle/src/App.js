import './App.css';
import { Fragment, useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducers/circle';
import { NoTransform, Transform } from './Styles/Circle'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { circles, animation } = state

  const svgCircle = (id) => {
    if(id % 2 !== 0){
      return <Style><svg height="100" width="100" key={id}><circle cx="50" cy="50" r="25" stroke="black" fill="green" class="sc-cOajty gxZIjd"></circle><text x="50" y="50">{id}</text></svg></Style>
      } else {
        return <svg height="100" width="100" key={id}><circle cx="50" cy="50" r="25" stroke="black" fill="green" class="sc-cOajty gxZIjd"></circle><text x="50" y="50">{id}</text></svg>
      }
  }
  
  const svgRect = (id) => {
    if(id % 2 !== 0){
      return  <Style><svg width="200" key={id} height="100">hello<rect width="100" height="100" fill="blue"></rect>  <text x="50" y="50">{id}</text></svg></Style> 
    } else {
      return <svg width="200" key={id} height="100">hello<rect width="100" height="100" fill="blue"></rect>  <text x="50" y="50">{id}</text></svg>
    }
  }

  const draw = () => {
      return circles.map((circle) => {
        if(circle.name === "SQUARE"){
          return svgRect(circle.id)
        } else {
          return svgCircle(circle.id)
        }
    })
  }

  useEffect(() => {
      if(circles.length > 0 && (circles[circles.length - 1].id / 7) % 1 === 0){
        circles[circles.length - 1].name = "SQUARE"
      }
  }, [circles])

  let Style = NoTransform
  if(animation === true){
    Style = Transform
  }
  
    return (
      <Fragment>
        <div className="App">
          <h1>Hello to the svg circle project</h1>
          <button onClick={e => dispatch({type:'ADD_CIRCLE', payload: 'CIRCLE'})}>ADD CIRCLE TEST</button>
          <button onClick={e => dispatch({type:'SHUFFLE'})}>Shuffle</button>
          <button onClick={e => dispatch({type:'START_ODD'})}>Start ODD shapes</button>
          <button onClick={e => dispatch({type:'STOP_ODD'})}>Stop ODD shapes</button>
          <br />
          {draw()}
        </div>
      </Fragment>
    );
}

export default App;
