import React from 'react';
import { useDispatch } from 'react-redux';
import { complete } from '../state/tasks';
import { ReactComponent as Icon } from '../assets/checkmark.svg';



const Task = ({ completed, title, id }) => {
  const dispatch = useDispatch();

  const completeTask = () => dispatch(complete(id));

  return completed
    ? (
      <li className='task task--completed'>
        <p className='task__title task__title--completed'>{title}</p>

        <button className='task__btn task__btn--completed' disabled>
          <Icon />
        </button>
      </li>
    )
    : (
      <li className='task'>
        <p className='task__title'>{title}</p>

        <button className='task__btn' onClick={completeTask}>
          <Icon />
        </button>
      </li>
    );
};

export default Task;