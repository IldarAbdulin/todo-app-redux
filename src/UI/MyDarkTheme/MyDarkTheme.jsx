import React, { useState } from 'react';
import { TodosChangeTheme } from '../MyChangeTheme/TodosChangeTheme';
import { MyInput } from '../MyInput/MyInput';
import styles from './DarkTheme.module.scss';

//icon
import sun from '../../images/icon-sun.svg';

export const MyDarkTheme = ({ changeTheme }) => {
  const [activeBox, setActiveBox] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.darkTheme}>
      <div className={styles.darkTheme__head}></div>
      <div className={styles.darkTheme__todolist}>
        <TodosChangeTheme icon={sun} changeTheme={changeTheme} />
        <br />
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.form__checkbox}>
            <MyInput onClick={() => setActiveBox(!activeBox)} type="checkbox" />
            <span>
              {activeBox && (
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path
                    fill="none"
                    stroke="#FFF"
                    stroke-width="2"
                    d="M1 4.304L3.696 7l6-6"
                  />
                </svg>
              )}
            </span>
          </div>
          <MyInput
            className={styles.form__myInput}
            type="text"
            placeholder="Введите текст задачи..."
          />
        </form>
      </div>
    </div>
  );
};
