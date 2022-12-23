import React from 'react';
import { TodosChangeTheme } from '../MyChangeTheme/TodosChangeTheme';
import styles from './LightTheme.module.scss';
import { MyInput } from '../MyInput/MyInput';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos } from '../../store/todos/todos-selector';
import { addTodo, removeTodo } from '../../store/todos/todos-actions';

//icons
import moon from '../../images/icon-moon.svg';
import { MyCheckBox } from '../MyCheckBox/MyCheckBox';
import { MyTodoList } from '../MyTodoList/MyTodoList';
import { MyFilter } from '../MyFilterList/MyFilter';

export const MyLightTheme = ({ changeTheme }) => {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value === '') {
      return alert('Строка не может быть пустой');
    }
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };
  return (
    <div className={styles.lightTheme}>
      <div className={styles.lightTheme__head}></div>
      <div className={styles.lightTheme__todolist}>
        <TodosChangeTheme icon={moon} changeTheme={changeTheme} />
        <br />
        <form className={styles.form} onSubmit={onSubmit}>
          <MyCheckBox />
          <MyInput
            className={styles.form__myInput}
            name="title"
            type="text"
            placeholder="Введите текст задачи..."
          />
        </form>
        <MyTodoList
          backgroundColor={styles.form__checkbox}
          text={styles.text}
          stylesTodos={styles.todos}
          stylesRemoveTodo={styles.removeTodo}
          removeIcon={styles.removeIcon}
          todos={todos}
          removeTodo={(e) => dispatch(removeTodo(e))}
        />
        {todos.length === 0 ? null : (
          <MyFilter btnList={styles.btnList} insideList={styles.insideList} />
        )}
      </div>
    </div>
  );
};
