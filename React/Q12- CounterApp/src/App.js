import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] =useState(0);
  
  return (
   <>
   <h1>Count is: <span>{count}</span></h1>
   <div className='btnDiv'>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count-1)}>-</button>
   </div>
   </>
  );
}

export default App;
