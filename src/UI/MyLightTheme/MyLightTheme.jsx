import React from 'react';
import { TodosChangeTheme } from '../MyChangeTheme/TodosChangeTheme';
import styles from './LightTheme.module.scss';
import { MyInput } from '../MyInput/MyInput';

import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from '../../store/todos/todos-actions';
import { selectActiveFilter } from '../../store/filter/filter-selector';
import { selectVisibleTodos } from '../../store/todos/todos-selector';

//icons
import moon from '../../images/icon-moon.svg';
import { MyTodoList } from '../MyTodoList/MyTodoList';
import { MyFilter } from '../MyFilterList/MyFilter';

export const MyLightTheme = ({ changeTheme }) => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
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
          <MyInput
            className={styles.form__myInput}
            name="title"
            type="text"
            placeholder="Введите текст задачи..."
          />
        </form>
        <div className={styles.scrollbar}>
          <MyTodoList
            backgroundColor={styles.form__checkbox}
            text={styles.text}
            stylesTodos={styles.todos}
            stylesRemoveTodo={styles.removeTodo}
            removeIcon={styles.removeIcon}
            todos={todos}
            onToggle={(e) => dispatch(toggleTodo(e))}
            removeTodo={(e) => dispatch(removeTodo(e))}
          />
          {todos.length === 0 ? (
            <>
              <h1 className={styles.zeroTodos}>Задачи отсутсвуют :(</h1>
              <MyFilter
                btnList={styles.btnList}
                insideList={styles.insideList}
              />
            </>
          ) : (
            <MyFilter btnList={styles.btnList} insideList={styles.insideList} />
          )}
        </div>
      </div>
    </div>
  );
};
