const initialState = {circles: [], animation: false}
export{initialState};

const reducer = (state, action) => {
    const {type, payload} = action
    // console.log(state)
    switch(type){
        case 'ADD_CIRCLE':
            return {
                ...state,
                circles: state.circles.concat({name: payload, id: state.circles.length})
            }
        case 'SHUFFLE':
            return {
                ...state,
                circles: state.circles.sort(() => Math.random() - 0.5)
            }
        case 'START_ODD':
            return {
                ...state,
                animation: true
            }
        case 'STOP_ODD':
            return {
                ...state,
                animation: false
            }
        default:
            return state
    }
}
export{reducer};