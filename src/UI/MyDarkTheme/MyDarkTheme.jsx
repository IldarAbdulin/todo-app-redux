import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TodosChangeTheme } from '../MyChangeTheme/TodosChangeTheme';
import { MyInput } from '../MyInput/MyInput';
import styles from './DarkTheme.module.scss';

import { selectVisibleTodos } from '../../store/todos/todos-selector';
import { addTodo, removeTodo } from '../../store/todos/todos-actions';

//icon
import sun from '../../images/icon-sun.svg';
import { MyTodoList } from '../MyTodoList/MyTodoList';
import { MyCheckBox } from '../MyCheckBox/MyCheckBox';
import { MyFilter } from '../MyFilterList/MyFilter';
import { selectActiveFilter } from '../../store/filter/filter-selector';
import { setFilter } from '../../store/filter/filter-action';

export const MyDarkTheme = ({ changeTheme }) => {
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
    <div className={styles.darkTheme}>
      <div className={styles.darkTheme__head}></div>
      <div className={styles.darkTheme__todolist}>
        <TodosChangeTheme icon={sun} changeTheme={changeTheme} />
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
          <MyFilter
            setFilter={(active) => dispatch(setFilter(active))}
            btnList={styles.btnList}
            insideList={styles.insideList}
          />
        )}
      </div>
    </div>
  );
};
