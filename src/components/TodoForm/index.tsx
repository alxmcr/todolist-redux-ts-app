import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";
import { ITodo } from "../../@types/appTypes";
import { addTodoAction } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      title,
    };

    dispatch(addTodoAction(newTodo));
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
