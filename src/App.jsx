import React from 'react';
import { useSelector } from 'react-redux';
import { storeTasks } from './state/tasks';

import Input from './components/Input';
import Task from './components/Task';
import Controls from './components/Controls';

import './styles/tags.css';
import './styles/app.css';
import './styles/input.css';
import './styles/task.css';
import './styles/controls.css';



const App = () => {
  const tasks = useSelector(storeTasks);

  return (
    <div className='app'>
      <h1 className='app__header'>todos</h1>

      <div className='app__body'>
        <Input />

        <ul className='app__tasks-list'>
          { tasks.map(item =>
            <Task
              key={item.id}
              completed={item.completed}
              title={item.title}
              id={item.id}
            />
          )}
        </ul>

        <Controls />
      </div>
    </div>
  );
}

export default App;
