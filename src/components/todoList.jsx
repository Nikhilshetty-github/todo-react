import { List } from "./list"

export function TodoList({ todoList, toggleToDo, deleteTodo }) {
    return <ul className='list'>
    {todoList.length === 0 && "No Todos"}
    {todoList.map( items => {
      return (
        <List {...items} key={items.id} toggleToDo={toggleToDo} deleteTodo={deleteTodo}/>
      )
    })}
  </ul>
}