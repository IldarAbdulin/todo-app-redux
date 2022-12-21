import React from 'react';
import { useState } from 'react';
import { TodosChangeTheme } from '../MyChangeTheme/TodosChangeTheme';
import styles from './LightTheme.module.scss';
import { MyInput } from '../MyInput/MyInput';

//icons
import moon from '../../images/icon-moon.svg';

export const MyLightTheme = ({ changeTheme }) => {
  const [activeBox, setActiveBox] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.lightTheme}>
      <div className={styles.lightTheme__head}></div>
      <div className={styles.lightTheme__todolist}>
        <TodosChangeTheme icon={moon} changeTheme={changeTheme} />
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
