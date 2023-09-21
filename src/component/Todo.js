import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-bgItemColor text-white p-4 rounded mb-4 cursor-pointer md:text-xl lg:text-2xl">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "line-through text-gray-400" : ""} flex w-[80%] break-all text-justify`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          className="cursor-pointer mr-2"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Todo;

