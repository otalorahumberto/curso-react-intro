import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Terminar curso', completed: true },
  { text: 'Hacer aseo', completed: false },
  { text: 'Cambiar aceite de la moto', completed: true },
  { text: 'Cambiar aceite de la moto otra vez', completed: true }
]

function App() {
  return (
    // <React.Fragment> is the same as <>
    <>
      <TodoCounter completed={16} total={25} />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            task={todo.text}
            status={todo.completed}
          />
        ))}
      </TodoList>
      <TodoSearch />

      <CreateTodoButton />

    </>
  );
}





export default App;