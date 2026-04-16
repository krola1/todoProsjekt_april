import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodo();
  return (
    <>
      {todos?.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </>
  );
}
