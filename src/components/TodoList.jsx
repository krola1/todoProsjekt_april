import { useState } from "react";
import { useTodo } from "../context/TodoContext";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import { TODO_FILTERS } from "../utils/constants";

export default function TodoList() {
  const [filter, setFilter] = useState(TODO_FILTERS.ALL);
  const { todos } = useTodo();

  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.done;
    if (filter === TODO_FILTERS.COMPLETED) return todo.done;
    return true;
  });

  return (
    <>
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filteredTodos?.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </>
  );
}
