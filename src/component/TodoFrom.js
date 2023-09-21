import { useState } from "react";
const TodoFrom = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border-[1px] border-bgItemColor text-white w-[65%] p-2 my-2 placeholder:placeholder text-sm md:text-xl lg:text-2xl"
        placeholder="Create New task .... "
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        required
      />
      <button className="cursor-pointer w-[35%] text-sm text-white bg-bgItemColor p-[9px] my-2 md:text-xl lg:text-2xl" type="submit">
        Add task
      </button>
      
    </form>
  );
};

export default TodoFrom;
