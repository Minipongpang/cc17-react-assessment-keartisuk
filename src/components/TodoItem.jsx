import { useState } from "react";
function TodoItem(props) {
  const { todo, deleteTodo, updateTodo, todoId } = props;
  const [updateTodoText, setUpdateTodoText] = useState(todo.title || "");
  const handleChangeTodoText = (event) => {
    setUpdateTodoText(event.target.value);
  };

  return (
    <ul>
      <li>
        <div className="todo-list-box">
          <input type="checkBox" />
          <p value={updateTodoText} onChange={handleChangeTodoText}>
            {todo.title}
          </p>
        </div>
        <div className="todo-list-delete">
          <button onClick={(event) => deleteTodo(todo.id)}>X</button>
        </div>
      </li>
    </ul>
  );
}

export default TodoItem;
