import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
import { todoContext } from '../context/context';

export const TaskList = () => {
  const { tasks, sortVal } = useContext(todoContext);

  return (
    <ul className={styles.tasks}>
      {/* Sort according to time  */}
      {sortVal === 0 && (
        tasks.sort((a, b) => b.id - a.id).map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
      )}
      {/* sort according to time reverse */}
      { sortVal === 1 && (     
        tasks.sort((a, b) => a.id - b.id).map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
      )}
      {/* sort according to alphabetical order */}
      {sortVal === 2 && (     
        tasks.sort((a, b) => a.name.localeCompare(b.name)).map(task => (
          <TaskItem
            key={task.name}
            task={task}
          />
        ))
      )}
      {/* Sort according to alphabetical order reverse */}
      {sortVal === 3 && (     
        tasks.sort((a, b) => b.name.localeCompare(a.name)).map(task => (
          <TaskItem
            key={task.name}
            task={task}
          />
        ))
      )}
    </ul>
  );
};
