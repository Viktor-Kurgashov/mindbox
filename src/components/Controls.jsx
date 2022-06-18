import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTasks, storeTab, selectTab, clearCompleted } from '../state/tasks';



const Controls = () => {
  const dispatch = useDispatch();

  const count = useSelector(storeTasks).length;
  const tab = useSelector(storeTab);

  const selectAll = () => dispatch(selectTab('all'));
  const selectActive = () => dispatch(selectTab('active'));
  const selectCompleted = () => dispatch(selectTab('completed'));

  const clear = () => dispatch(clearCompleted());

  return (
    <div className='controls'>
      <p className='controls__count'>{count + ' items left'}</p>

      <div className='controls__tabs-container'>
        { (tab === 'all')
          ? <p className='controls__tab controls__tab--current'>All</p>
          : <button className='controls__tab' onClick={selectAll}>All</button>
        }

        { (tab === 'active')
          ? <p className='controls__tab controls__tab--current'>Active</p>
          : <button className='controls__tab' onClick={selectActive}>Active</button>
        }

        { (tab === 'completed')
          ? <p className='controls__tab controls__tab--current'>Completed</p>
          : <button className='controls__tab' onClick={selectCompleted}>Completed</button>
        }
      </div>

      <button className='controls__clear-btn' onClick={clear}>Clear completed</button>
    </div>
  )
};

export default Controls;