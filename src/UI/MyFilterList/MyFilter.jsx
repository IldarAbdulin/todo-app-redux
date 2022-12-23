import React from 'react';

export const MyFilter = ({ btnList, insideList, setFilter }) => {
  return (
    <div className={btnList}>
      <div className={insideList}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
    </div>
  );
};
