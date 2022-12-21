import React from 'react';
import styles from './ChangeTheme.module.scss';

export const TodosChangeTheme = ({ icon, changeTheme }) => {
  return (
    <div className={styles.change}>
      <div className={styles.change__head}>
        <h1>Todo</h1>
        <img
          onClick={changeTheme}
          className={styles.change__icon}
          src={icon}
          alt="change theme"
        />
      </div>
    </div>
  );
};
