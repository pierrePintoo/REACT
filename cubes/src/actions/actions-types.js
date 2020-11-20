import { ADD_CUBE, CHANGE_ODD, SHUFFLE, STOP_ODD } from "../constants/actions"

export const add_cube = payload => {
    return {
        type: ADD_CUBE, payload
    }
}

export const suffle = () => {
    return {
        type: SHUFFLE
    }
}

export const change_odd = () => {
    return {
        type: CHANGE_ODD
    }
}

export const stop_odd = () => {
    return {
        type: STOP_ODD
    }
}