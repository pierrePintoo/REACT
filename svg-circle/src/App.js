import './App.css';
import { Fragment, useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducers/circle';
import styled, { keyframes } from 'styled-components';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { circles, animation } = state

  const svgCircle = (id) => {
    if(id % 2 !== 0){
      return(
      <Transform>
        <svg height="100" width="100" key={id}>
          <circle cx="50" cy="50" r="25" stroke="black" fill="green" class="sc-cOajty gxZIjd"></circle>
          <text x="50" y="50">{id}</text>
        </svg>
      </Transform>
    )
      } else {
        return (
          <svg height="100" width="100" key={id}>
            <circle cx="50" cy="50" r="25" stroke="black" fill="green" class="sc-cOajty gxZIjd"></circle>
            <text x="50" y="50">{id}</text>
          </svg>
        )
      }
  }
  
  const svgRect = (id) => {
    if(id % 2 !== 0){
      return  <Transform><svg width="200" key={id} height="100">hello<rect width="100" height="100" fill="blue"></rect>  <text x="50" y="50">{id}</text></svg></Transform> 
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

  let Transform = styled.div`display: inline`
  if(animation === true){
    const transform = keyframes`
    from {
      transform: scaleX(1);
    }

    to {
      transform: scaleX(2);
    }
  `;

    // Here we create a component that will rotate everything we pass in over two seconds
    Transform = styled.div`
      display: inline-block;
      animation: ${transform} 2s linear infinite;
      padding: 2rem 1rem;
      font-size: 1.2rem;
    `;  
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
