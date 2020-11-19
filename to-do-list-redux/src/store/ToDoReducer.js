let id = 2

const initialState = [
    {
        id: 1,
        title: 'Title 1',
        completed: false
    },
    {
        id: 2,
        title: 'Title 2',
        completed: false
    }
]

export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

const ToDoReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: id + 1 ,
                    ...action.payload,
                    completed: false
                }
            ]
        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, ...action.payload}
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}

export { ToDoReducer }