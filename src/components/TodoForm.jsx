import { useState } from "react";
import { useTodo } from "../context/TodoContext";
export default function TodoForm() {
  const { addItem } = useTodo();

  const [text, setText] = useState("");

  //handler function that uses additem to create a todo object based on text state.
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
      <button>Delete todo</button>
    </form>
  );
}
