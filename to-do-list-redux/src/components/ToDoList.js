import { connect } from 'react-redux'

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

export const ToDoListStore = connect(
    (state) => ({
        todos: state.todos
    })
)(ToDoList)