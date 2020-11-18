import { SET_NUMBER, ADDITION } from '../constants/actions';

// Source de vérité
const stateInit = {
    number : '',
    result : 0
}

const reducer = (state = stateInit, action= {}) => {

    switch(action.type){

        case SET_NUMBER :

            return {
                ...state,
                number : action.payload
            }

        default:
            return state;
    }
}

export default reducer;