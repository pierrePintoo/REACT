const initialState = {nbCircles: 0}
export{initialState};

const reducer = (state, action) => {
    const {type} = action
    console.log(state)
    switch(type){
        case 'ADD_CIRCLE':
            return {
                ...state,
                nbCircles: state.nbCircles + 1
            }
        case 'SHUFFLE':
            return console.log('SHUFFLE')
        case 'STOP_ODD':
            return console.log('STOP_ODD')
        case 'START_ODD':
            return console.log('START_ODD')
        default:
            return state
    }
}
export{reducer};