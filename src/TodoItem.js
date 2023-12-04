import "./stiles/TodoItem.css"

function TodoItem({ task, status }) {
    return (
        <li>
            <span>V</span>
            <p>{task}</p>
            <p>{status}</p>
            <span>X</span>
        </li>
    )
}

export { TodoItem }