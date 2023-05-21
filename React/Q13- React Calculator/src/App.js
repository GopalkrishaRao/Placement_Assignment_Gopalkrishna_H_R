import { useState } from 'react';
import './App.css';

function App() {

const [displayValue, setDisplayValue] = useState(5)
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button=>{
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        let cal = () => {
            switch (e.target.innerText){
                case 'C':
                    setDisplayValue(8);
                     break;
            }

        }
        cal()
    })
})
// let buttons = Array.from(document.getElementsByClassName('button'));
// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         let cal = () => {
//             switch (e.target.innerText) {
//                 case 'C':
//                     setDisplayValue("");
//                     break;
//                 case '←':
//                     if (displayValue) {
//                         setDisplayValue(displayValue.slice(0, -1));
//                     }
//                     break;
//                 case '=':
//                     try {
//                         setDisplayValue(eval(displayValue));
//                     } catch {
//                         setDisplayValue("Error");
//                     }
//                     break;
//                 default:
//                     setDisplayValue(displayValue+e.target.innerText);
//             }
//         };
//         if (displayValue !== 'Error') {
//             cal();
//         } else {
//             setDisplayValue('');
//             cal();
//         }
//     });
// });

return (
    <>

        <div className="container">
            <div id="display">{displayValue}</div>
            <div className="buttons">
                <div className="button">C</div>
                <div className="button">/</div>
                <div className="button">*</div>
                <div className="button" onClick={()=>setDisplayValue(displayValue.slice(0, -1))}>&larr;</div>
                <div className="button">7</div>
                <div className="button">8</div>
                <div className="button">9</div>
                <div className="button">-</div>
                <div className="button">4</div>
                <div className="button">5</div>
                <div className="button">6</div>
                <div className="button">+</div>
                <div className="button">1</div>
                <div className="button">2</div>
                <div className="button">3</div>
                <div className="button">.</div>
                <div className="button">(</div>
                <div className="button">0</div>
                <div className="button">)</div>
                <div id="equal" className="button">=</div>
            </div>
        </div>
    </>
);
}

export default App;
