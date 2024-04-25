// Write your code here
import './index.css'

const Todo = props => {
  const {singleTodo, onDelete} = props
  const {title, id} = singleTodo

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default Todo
