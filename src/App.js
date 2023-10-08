import { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './components/newTodoForm';
import { TodoList } from './components/todoList';

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList));
  }, [todoList]);

  function addTodoForm(title) {
    setTodoList(currList => {
      return [
        ...currList,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleToDo(id, completed) {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodoList(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id );
    });
  }

  return (
    <>
      <NewTodoForm addTodoForm={addTodoForm}/>
      <h1 className='header'>Todo List</h1>
      <TodoList todoList={todoList} toggleToDo={toggleToDo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
