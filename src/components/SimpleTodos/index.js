import {Component} from 'react'
import './index.css'
import Todo from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }

  onDelete = id => {
    const {todoList} = this.state

    const filteredUserData = todoList.filter(eachuser => eachuser.id !== id)

    this.setState({
      todoList: filteredUserData,
    })
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="todos-heading">Simple Todos</h1>
          <ul className="unordered-container">
            {todoList.map(eachItem => (
              <Todo
                singleTodo={eachItem}
                key={eachItem.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
