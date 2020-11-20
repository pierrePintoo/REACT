import { ADD_CUBE, CHANGE_ODD, EASTER_EGG, SHUFFLE, STOP_ODD } from "../constants/actions";

export const initialState = {
    number: 0,
    cubes: [],
    easter_eggs: [],
    frequency_easter_eggs : 3 
  };
  
  export const reducer = (state = initialState, action = {}) => {
    let cubes;

    switch (action.type) {
  
      case EASTER_EGG:
  
        const { payload } = action;
        return {
          ...state,
          easter_eggs: state.easter_eggs.concat(payload)
        }
  
      case ADD_CUBE:

        const cube = {
          number: state.number,
          stop: false,
        };
  
        return {
          ...state,
          cubes: state.cubes.concat(cube),
          number: state.number + 1,
        };
  
      case SHUFFLE:
  
        cubes = state.cubes.map( cube => ({ ...cube })   );
        cubes.sort(() => Math.random() - 0.5);

        return {
          ...state,
          cubes
        };
  
      case STOP_ODD:
        cubes = state.cubes.map((cube) => {
          if (cube.number % 2 === 1) cube.stop = true;
  
          return { ...cube };
        });
  
        return {
          ...state,
          cubes,
        };
  
      case CHANGE_ODD:
        cubes = state.cubes.map((cube) => {
          if (cube.number % 2 === 1) cube.stop = false;
  
          return { ...cube };
        });
  
        return {
          ...state,
          cubes,
        };
  
      default:
        return state;
    }
  };