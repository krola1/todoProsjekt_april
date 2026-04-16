import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

//Initialize context

const TodoContext = createContext({});

//providerFunction
export const TodoProvider = ({ children }) => {
  //code for todolist here:
  const [todos, setTodos] = useLocalStorage("todotest9000");

  //------------------------------------------------
  const addItem = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      title: text,
      done: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };
  //removeitem
  const removeItem = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //edititem
  const editItem = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: text } : item)),
    );
  };

  //toggle completed
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const providerObj = {
    //insert values here
    todos,
    addItem,
    removeItem,
    editItem,
    toggleCompleted,
  };
  return (
    <TodoContext.Provider value={providerObj}>{children}</TodoContext.Provider>
  );
};

//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useContext must be used inside a provider");
  }
  return context;
};
