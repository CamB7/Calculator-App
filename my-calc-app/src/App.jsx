import { useState } from 'react';
import './App.css';
import { handleButtonClick } from './ButtonLogic';

function App() {
  const [display, setDisplay] = useState('0');

  const buttons = [
    '7',
    '8',
    '9',
    '÷',
    '4',
    '5',
    '6',
    'x',
    '1',
    '2',
    '3',
    '-',
    '0',
    'C',
    '=',
    '+',
  ];

  return (
    <div className="App">
      <div className="calc-container">
        <div className="calc-screen">{display}</div>
        <div className="calc-buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn, display, setDisplay)}
              className={
                ['÷', 'x', '-', '+'].includes(btn) ? 'symbol-button' : ''
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
