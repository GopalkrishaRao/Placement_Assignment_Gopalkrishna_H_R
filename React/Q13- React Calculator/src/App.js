import { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState();

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        setDisplayValue();
        break;
      case '←':
        setDisplayValue(displayValue.slice(0, -1));
        break;
      default:
        // Append the clicked button's value to the displayValue
        setDisplayValue(displayValue + value);
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div id="display">{displayValue}</div>
        <div className="buttons">
          <div className="button" onClick={() => handleButtonClick('C')}>C</div>
          <div className="button">/</div>
          <div className="button">*</div>
          <div className="button" onClick={() => handleButtonClick('←')}>&larr;</div>
          <div className="button" onClick={() => handleButtonClick('7')}>7</div>
          <div className="button" onClick={() => handleButtonClick('8')}>8</div>
          <div className="button" onClick={() => handleButtonClick('9')}>9</div>
          <div className="button">-</div>
          <div className="button" onClick={() => handleButtonClick('4')}>4</div>
          <div className="button" onClick={() => handleButtonClick('5')}>5</div>
          <div className="button" onClick={() => handleButtonClick('6')}>6</div>
          <div className="button">+</div>
          <div className="button" onClick={() => handleButtonClick('1')}>1</div>
          <div className="button" onClick={() => handleButtonClick('2')}>2</div>
          <div className="button" onClick={() => handleButtonClick('3')}>3</div>
          <div className="button">.</div>
          <div className="button">(</div>
          <div className="button" onClick={() => handleButtonClick('0')}>0</div>
          <div className="button">)</div>
          <div id="equal" className="button">=</div>
        </div>
      </div>
    </>
  );
}

export default App;
