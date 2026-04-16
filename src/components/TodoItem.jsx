import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoItem({ createdAt, id, title }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(title);
  const { removeItem, editItem } = useTodo();
  const date = new Date(createdAt).toLocaleString();

  const handleEdit = () => {
    if (isEditing) {
      //edit function
      editItem(id, text);
      setIsEditing(!isEditing);
    } else {
      setIsEditing(!isEditing);
    }
  };

  return (
    <div style={{ border: "solid white" }}>
      <p>{date}</p>
      <p>{id}</p>

      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <h3>{title}</h3>
      )}

      <input type="checkbox" name="" id="checkbox" />
      <label htmlFor="checkbox">completed</label>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => removeItem(id)}>Delete</button>
    </div>
  );
}
