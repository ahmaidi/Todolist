import TodoForm from "./TodoFrom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: newTask,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded ">
      <h1 className=" mb-4 sm:text-xl md:text-2xl lg:text-3xl">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <form>
      <input
        type="text"
        className="outline-none bg-transparent border-[1px] border-bgItemColor text-white w-full p-2 my-2 placeholder:placeholder text-sm md:text-xl lg:text-2xl"
        placeholder="Search for task .... "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      </form>
      <div className="sm:h-60 md:h-70 lg:h-80 relative overflow-auto scroll-container">
        <div className="absolute w-full">
          {todos.filter((todo)=>
          {
            return search.toLowerCase() === '' ? todo : todo.task.toLowerCase().includes(search.toLowerCase())
          }).map((todo, index) =>
            todo.isEditing ? (
              <EditTodo key={todo.id} task={todo} editTodo={editTodo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
