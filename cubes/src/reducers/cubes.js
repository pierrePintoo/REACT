import { Uniform } from "three";
import { ADD_CUBE, CHANGE_ODD, EASTER_EGG, SHUFFLE, STOP_ODD } from "../constants/actions";

export const initialState = [];
  
  export const reducer = (state = initialState, action = {}) => {
    console.log(state)
    switch (action.type) {
  
      case EASTER_EGG:
  
      // numéro de la figure à transformer en carré
        let cubes = [...state]
        
        cubes[cubes.length - 1] = { ...cubes[cubes.length - 1], easter_eggs: true }

      return cubes
  
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
        const cube = {
          position: [(0 * 2 % 20 - 10), 5 - Math.floor(0 / 10) * 2, -5],
          number: state.length,
          easter_eggs: false,
          stop: false,
        };
        if(state.length > 0){
          const number = state[state.length - 1].number
          let position = [(number * 2 % 20 - 10), 5 - Math.floor(number / 10) * 2, -5]
          cube.position = position
          return [...state, cube]
        } else {
            return [...state, cube]
        }  
      case SHUFFLE:
      // vraie copie de mes cercles
      // 1. map retourne un tableau donc un nouvel objet
      // 2. copie de chaque littéral des cubes
        // cubes = state.cubes.map((cube) => { return { ...cube } }  );
  
        // ( {} ) dans le return indique à JS de retourner l'expression qui se trouve dans les parenthèses
        cubes = state.map(cube => ({ ...cube }));
        // console.log('before', cubes)
        cubes.sort(() => Math.random() - 0.5);
        return [...state, cubes];

  
      case STOP_ODD:
        cubes = state.map((cube) => {
          if (cube.number % 2 === 1) cube.stop = true;
  
          return [ ...cube ];
        });
  
        return [...state, cubes];

  
      case CHANGE_ODD:
        cubes = state.map((cube) => {
          if (cube.number % 2 === 1) cube.stop = false;
  
          return [ ...cube ];
        });
  
        return [...state, cubes];
  
      default:
        return state;
    }
  };