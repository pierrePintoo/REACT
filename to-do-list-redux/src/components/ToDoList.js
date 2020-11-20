import { useDebugValue } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { toggleToDoActions } from '../store/todosActions'
import { todosSelector } from '../store/ToDoSelectors'

const ToDoItem = ({todo, onToggle}) => {
    return (
        <li>
            <label>
                {todo.title}
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
            </label>
        </li>
    )
}

export const ToDoList = ({todos, onToggle}) => {
    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()
    return (
        <ul>
            {todos.map((todo) => <ToDoItem
            todo={todo}
            onToggle={onToggle}
            key={todo.id} />
            )}
        </ul>
    )
}

// export const ToDoListStore = connect(
//     (state) => ({
//         todos: todosSelector(state),
//     }),
//     (disatch) => ({
//         onToggle: todo => disatch(toggleToDoActions(todo))
//     })
// )(ToDoList)