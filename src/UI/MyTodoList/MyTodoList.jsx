import React from 'react';
import { MyCheckBox } from '../MyCheckBox/MyCheckBox';
import styles from './MyTodoList.module.scss';

export const MyTodoList = ({
  todos,
  removeTodo,
  backgroundColor,
  text,
  stylesTodos,
  stylesRemoveTodo,
  removeIcon,
  onToggle,
}) => {
  return (
    <div className={styles.all__todos}>
      {todos.map((todo) => (
        <div key={todo.id} className={backgroundColor}>
          <div>
            <MyCheckBox
              onChange={() => onToggle(todo.id)}
              checked={todo.completed}
            />
          </div>
          <div className={text}>
            <div className={stylesTodos}>{todo.title}</div>
            <div className={stylesRemoveTodo}>
              <svg
                className={removeIcon}
                onClick={() => removeTodo(todo.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
