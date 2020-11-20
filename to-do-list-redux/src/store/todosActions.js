import { UPDATE_TODO } from "./ToDoReducer";

export const toggleToDoActions = (todo) => ({
    type: UPDATE_TODO,
    payload: {...todo, completed: !todo.completed}
})