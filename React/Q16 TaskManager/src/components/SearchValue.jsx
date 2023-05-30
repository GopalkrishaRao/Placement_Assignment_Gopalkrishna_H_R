import React, { useContext, useEffect, useRef } from 'react';
import { todoContext } from '../context/context';
import styles from './TaskList.module.css';
import TaskItem from './TaskItem';

export default function SearchdValue() {
  const { tasks, searchVal, setSearchVal } = useContext(todoContext);


  // Filter based on 'name' property
  const filteredData = tasks.filter((t) => t.name.includes(searchVal));
  
  // close edit mode on click or escape key
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setSearchVal("");
      }
    };
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setSearchVal("");
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  document.addEventListener("keydown", handleEscapeKey);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
    document.removeEventListener("keydown", handleEscapeKey);
  };
}, []);

  return (
    <>
    <ul className={styles.tasks} ref={searchInputRef}>
    {filteredData.length === 0 ? 
        (<h1>No matching results found...!!</h1>) : 
        (<div> 
          <h1>Search Results</h1>
          {filteredData.map(task => (
            <TaskItem
                key={task.id}
                task={task}  
            />))
          }
          </div>) 
    }
    </ul>
   </>
  );
};