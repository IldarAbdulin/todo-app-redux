import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../../store/filter/filter-selector';
import { setFilter } from '../../store/filter/filter-action';

export const MyFilter = ({ btnList, insideList }) => {
  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();
  return (
    <div className={btnList}>
      <div className={insideList}>
        <button
          onClick={() => dispatch(setFilter('all'))}
          style={{
            color:
              activeFilter === 'all'
                ? 'hsl(234, 11%, 52%)'
                : 'hsl(233, 14%, 35%)',
          }}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          style={{
            color:
              activeFilter === 'active'
                ? 'hsl(234, 11%, 52%)'
                : 'hsl(233, 14%, 35%)',
          }}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          style={{
            color:
              activeFilter === 'completed'
                ? 'hsl(234, 11%, 52%)'
                : 'hsl(233, 14%, 35%)',
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
