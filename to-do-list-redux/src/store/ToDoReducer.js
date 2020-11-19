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
const ToDoReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: id + 1 ,
                    ...action.payload,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default ToDoReducer