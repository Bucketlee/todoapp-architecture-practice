import { useSelector } from "react-redux";

import { RootState } from "./app/store";
import Todo from "./models/todo";

function useTodoObserver() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  return todos.map((json) => Todo.fromJson(json));
}

export default useTodoObserver;
