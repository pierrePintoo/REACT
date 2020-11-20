import { Uniform } from "three";
import { ADD_CUBE, CHANGE_ODD, EASTER_EGG, SHUFFLE, STOP_ODD } from "../constants/actions";

export const initialState = {
    number: 0,
    cubes: [],
    easter_eggs: [],
    frequency_easter_eggs : 3 // TODO pour définir la fréquence des easter-eggs
  };
  
  export const reducer = (state = initialState, action = {}) => {
    let cubes;
    const { number } = state
    // console.log(state)
    switch (action.type) {
  
      case EASTER_EGG:
  
      // numéro de la figure à transformer en carré
        const { payload } = action;
        return {
          ...state,
          easter_eggs: state.easter_eggs.concat(payload)
        }
  
      case ADD_CUBE:
        // const CX_BEGIN = -3
        // const CY_BEGIN = 2
        // const STEP_CX = 0.5
        // const STEP_CY = 1
        // const cx = () => {
        //   if(state.cubes[0] === undefined || state.cubes[state.cubes.length - 1].cx === Math.abs(CX_BEGIN)){
        //     return CX_BEGIN
        //   } else {
        //     return state.cubes[state.cubes.length - 1].cx + STEP_CX
        //   }
        // }

        // const cy = () => {
        //   if(state.cubes[0] === undefined){
        //     return CY_BEGIN
        //   } else if (state.cubes[state.cubes.length - 1].cx === Math.abs(CX_BEGIN)){
        //     return state.cubes[state.cubes.length - 1].cy - STEP_CY
        //   } else {
        //     return state.cubes[state.cubes.length - 1].cy
        //   }
        // }
        let position = [(number * 2 % 20 - 10), 5 - Math.floor(number / 10) * 2, -5]

        const cube = {
          w: 100,
          h: 100,
          position: position,
          r: 25,
          number: state.number,
          stop: false,
        };
  
        return {
          ...state,
          cubes: state.cubes.concat(cube),
          number: state.number + 1,
        };
  
      case SHUFFLE:
  
      // vraie copie de mes cercles
      // 1. map retourne un tableau donc un nouvel objet
      // 2. copie de chaque littéral des cubes
        // cubes = state.cubes.map((cube) => { return { ...cube } }  );
  
        // ( {} ) dans le return indique à JS de retourner l'expression qui se trouve dans les parenthèses
        cubes = state.cubes.map( cube => ({ ...cube })   );
        // console.log('before', cubes)
        cubes.sort(() => Math.random() - 0.5);
        // console.log('after', cubes)
        return {
          ...state,
          // cubes:cubes,
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