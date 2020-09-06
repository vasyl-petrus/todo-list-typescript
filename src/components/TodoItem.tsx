import * as React from "react";
import { TodoItemInterface } from "./../interfaces";

const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item" tabIndex={0}>
      <div
        className="todo-item-checkbox"
        onClick={() => props.handleTodoComplete(props.todo.id)}
        onKeyPress={() => props.handleTodoComplete(props.todo.id)}
        tabIndex={0}
      >
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>
      <div
        className="item-remove"
        onClick={() => props.handleTodoRemove(props.todo.id)}
        onKeyPress={() => props.handleTodoRemove(props.todo.id)}
        tabIndex={0}
      >
        ⨯
      </div>
    </div>
  );
};
export default TodoItem;
