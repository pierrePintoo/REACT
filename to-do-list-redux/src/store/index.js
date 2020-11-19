import { createStore, combineReducers } from 'redux'
import {  ToDoReducer } from './ToDoReducer'

const store = createStore(
    combineReducers({
        todos: ToDoReducer,
        filter: (state = 0, action) => state
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store