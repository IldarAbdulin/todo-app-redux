import React from 'react';
import { useState } from 'react';
import './MyCheckBox.scss';
import { MyInput } from '../MyInput/MyInput';
export const MyCheckBox = ({ checked, onChange }) => {
  const [activeBox, setActiveBox] = useState(false);
  return (
    <div className="form__checkbox">
      <MyInput
        onChange={onChange}
        checked={checked}
        onClick={() => setActiveBox(!activeBox)}
        type="checkbox"
      />
      <span>
        {activeBox && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </span>
    </div>
  );
};
