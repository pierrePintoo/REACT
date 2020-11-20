import { ADD_CUBE, CHANGE_ODD, EASTER_EGG, SHUFFLE, STOP_ODD } from "../constants/actions";

export const initialState = {
    number: 0,
    cubes: [],
    easter_eggs: [],
    frequency_easter_eggs : 7 // TODO pour définir la fréquence des easter-eggs
  };
  
  export const reducer = (state = initialState, action = {}) => {
    let cubes;
    console.log(state)
    switch (action.type) {
  
      case EASTER_EGG:
  
      // numéro de la figure à transformer en carré
        const { number } = action;
  
        return {
          ...state,
          easter_eggs: state.easter_eggs.concat(number)
        }
  
      case ADD_CUBE:
        const circle = {
          w: 100,
          h: 100,
          cx: 50,
          cy: 50,
          r: 25,
          number: state.number,
          stop: false,
        };
  
        return {
          ...state,
          cubes: state.cubes.concat(circle),
          number: state.number + 1,
        };
  
      case SHUFFLE:
  
      // vraie copie de mes cercles
      // 1. map retourne un tableau donc un nouvel objet
      // 2. copie de chaque littéral des cubes
        // cubes = state.cubes.map((circle) => { return { ...circle } }  );
  
        // ( {} ) dans le return indique à JS de retourner l'expression qui se trouve dans les parenthèses
        cubes = state.cubes.map( circle => ({ ...circle })   );
  
        cubes.sort(() => Math.random() - 0.5);
  
        return {
          ...state,
          // cubes:cubes,
          cubes
        };
  
      case STOP_ODD:
        cubes = state.cubes.map((circle) => {
          if (circle.number % 2 === 1) circle.stop = true;
  
          return { ...circle };
        });
  
        return {
          ...state,
          cubes,
        };
  
      case CHANGE_ODD:
        cubes = state.cubes.map((circle) => {
          if (circle.number % 2 === 1) circle.stop = false;
  
          return { ...circle };
        });
  
        return {
          ...state,
          cubes,
        };
  
      default:
        return state;
    }
  };