import React, { useState } from 'react';
import { MyDarkTheme } from '../UI/MyDarkTheme/MyDarkTheme';
import { MyLightTheme } from '../UI/MyLightTheme/MyLightTheme';

export const TodoList = () => {
  const [activeTheme, setActiveTheme] = useState(false);
  return (
    <div>
      {!activeTheme ? (
        <MyDarkTheme changeTheme={() => setActiveTheme(true)} />
      ) : (
        <MyLightTheme changeTheme={() => setActiveTheme(false)} />
      )}
    </div>
  );
};
