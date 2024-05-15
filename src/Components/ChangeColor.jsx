import React, { useReducer } from 'react';

// Boshlang'ich holatlar
const initialState = { red: 0, green: 0, blue: 0 };

// Reducer funksiyasi
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementRed':
      return { ...state, red: state.red < 255 ? state.red + 10 : 255 };
    case 'decrementRed':
      return { ...state, red: state.red > 0 ? state.red - 10 : 0 };
    case 'incrementGreen':
      return { ...state, green: state.green < 255 ? state.green + 10 : 255 };
    case 'decrementGreen':
      return { ...state, green: state.green > 0 ? state.green - 10 : 0 };
    case 'incrementBlue':
      return { ...state, blue: state.blue < 255 ? state.blue + 10 : 255 };
    case 'decrementBlue':
      return { ...state, blue: state.blue > 0 ? state.blue - 10 : 0 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Noto\'g\'ri harakat turi');
  }
};

const ChangeColor = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-64 h-64 mb-8"
        style={{ backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}
      ></div>
      <div className="space-y-4">
        <div className="space-x-2 flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: `rgb(${state.red}, 0, 0)` }}>
            Red: {state.red}
          </h1>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
            onClick={() => dispatch({ type: 'incrementRed' })}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
            onClick={() => dispatch({ type: 'decrementRed' })}
          >
            Decrement
          </button>
        </div>
        <div className="space-x-2 flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: `rgb(0, ${state.green}, 0)` }}>
            Green: {state.green}
          </h1>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            onClick={() => dispatch({ type: 'incrementGreen' })}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            onClick={() => dispatch({ type: 'decrementGreen' })}
          >
            Minus color
          </button>
        </div>
        <div className="space-x-2 flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: `rgb(0, 0, ${state.blue})` }}>
            Blue: {state.blue}
          </h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            onClick={() => dispatch({ type: 'incrementBlue' })}
          >
            Add color
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            onClick={() => dispatch({ type: 'decrementBlue' })}
          >
            Decrement
          </button>
        </div>
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeColor;
