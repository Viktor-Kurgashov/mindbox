import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../state/tasks';
import { ReactComponent as Icon } from '../assets/arrow.svg';



const Input = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const update = (e) => setValue(e.target.value);

  const createTask = () => {
    dispatch(create(value));
    setValue('');
  };

  return (
    <label className='input'>
      <input
        type='text'
        value={value}
        onChange={update}
        className='input__field'
        placeholder='what needs to be done?'
      />

      <button
        onClick={createTask}
        className='input__create-btn'
      >
        <Icon />
      </button>
    </label>
  )
}

export default Input;