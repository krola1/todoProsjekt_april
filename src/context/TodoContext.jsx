import { createContext, useContext, useState } from "react";

//Initialize context

const TodoContext = createContext({});

//providerFunction
export const TodoProvider = ({ children }) => {
  //code for todolist here:
  const [todos, setTodos] = useState([]);

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

  //edititem
  //removeitem

  const providerObj = {
    //insert values here
    todos,
    addItem,
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
