import React, { useState } from 'react';


function Calculator() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen"
    style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncto5507EJ762PKXJocyFFJd2WsC1SIr2bw&s')`,
    }}>
      <input
        type="text"
        value={expression}
        readOnly
        className="w-30 p-2 text-right border border-gray-300 rounded-md focus:outline-none"
      />
      <div className="grid grid-cols-4 gap-1 mt-2">
        {['7', '8', '9', '/','4', '5', '6', '*','1', '2', '3', '-','.', '0', '=', '+', 'C'].map((item, index) => (
          <button
            key={index}
            className="w-16 h-16 p-2 text-xl text-white bg-blue-500 rounded-md focus:outline-none"
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
