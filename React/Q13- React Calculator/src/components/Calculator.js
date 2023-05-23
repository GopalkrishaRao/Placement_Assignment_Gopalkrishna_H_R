import React, {useState} from 'react';
import './Calculator.css'

export default function Calculator() {
    const [result, setResult] = useState('');

  const handleClick = (value) => {
    
    setResult(result + value);
  };


  const calculateResult = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearResult = () => {
    setResult('');
  };
  return (
    <div className="container">
    <div id="display">{result}</div>
      <div className="buttons">
          <div className="button" 
          onClick={clearResult}>C</div>
          <div className="button"
          onClick={() => handleClick('/')}>/</div>
          <div className="button"
          onClick={() => handleClick('*')}>*</div>
          <div className="button"
          onClick={()=>setResult(result.slice(0,-1))}>&larr;</div>
          <div className="button" 
          onClick={() => handleClick('7')}>7</div>
          <div className="button" 
          onClick={() => handleClick('8')}>8</div>
          <div className="button" 
          onClick={() => handleClick('9')}>9</div>
          <div className="button" 
          onClick={() => handleClick('-')}>-</div>
          <div className="button" 
          onClick={() => handleClick('4')}>4</div>
          <div className="button" 
          onClick={() => handleClick('5')}>5</div>
          <div className="button" 
          onClick={() => handleClick('6')}>6</div>
          <div className="button" 
          onClick={() => handleClick('+')}>+</div>
          <div className="button" 
          onClick={() => handleClick('1')}>1</div>
          <div className="button" 
          onClick={() => handleClick('2')}>2</div>
          <div className="button" 
          onClick={() => handleClick('3')}>3</div>
          <div className="button" 
          onClick={() => handleClick('.')}>.</div>
        </div>
        <div className='lastrow'>
        <div className="button" 
          onClick={() => handleClick('0')}>0</div>
          <div id="equal" className="button"
          onClick={calculateResult}>=</div>
        </div>
          
      
  </div>
  )
}
