import React, { useReducer } from "react";
import "./../App.css"

const reducer = (state, action) => {
  switch (action.type) {
    case "addred":
      return { ...state, red: state.red < 255 ? state.red + 10 : 255 };
    case "minusred":
      return { ...state, red: state.red > 0 ? state.red - 10 : 0 };
    case "addblue":
      return { ...state, blue: state.blue < 255 ? state.blue + 10 : 255 };
    case "minusblue":
      return { ...state, blue: state.blue > 0 ? state.blue - 10 : 0 };
    case "addgreen":
      return { ...state, green: state.green < 255 ? state.green + 10 : 255 };
    case "minusgreen":
      return { ...state, green: state.green > 0 ? state.green - 10 : 0 };
    case "addyellow":
      return { ...state, yellow: state.yellow < 255 ? state.yellow + 10 : 255 };
    case "minusyellow":
      return { ...state, yellow: state.yellow > 0 ? state.yellow - 10 : 0 };
    case "addpurple":
      return { ...state, purple: state.purple < 255 ? state.purple + 10 : 255 };
    case "minuspurple":
      return { ...state, purple: state.purple > 0 ? state.purple - 10 : 0 };
    case "addblack":
      return { ...state, black: state.black < 255 ? state.black + 10 : 255 };
    case "minusblack":
      return { ...state, black: state.black > 0 ? state.black - 10 : 0 };
    case "reset":
      return initialState
    default:
  }
};

const initialState = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0,
  purple: 0,
  black: 0,
};
const MyChangeColor = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container mx-auto h-screen items-center flex">
      <div className="tables mx-auto flex flex-col gap-10 ">
        <div
          className="display w-40 h-40 rounded-full border-2 mx-auto"
          style={{
            background: `linear-gradient(to bottom right, 
                    rgba(${state.red}, ${state.green}, ${state.blue}, 1), 
                    rgba(${state.yellow}, ${state.purple}, ${state.black}, 1))`,
          }}
        ></div>

        <div className="flex flex-col gap-4 items-center">
          <div className="color flex gap-4">
            <h1
              className="text-2xl font-semibold tracking-wider"
              style={{ color: `rgb(${state.red}, 0, 0)` }}
            >
              Red: {state.red}
            </h1>
            <button className="px-4 bg-blue-950 text-white font-semibold hover:border-2 hover:border-green-800 hover:text-green-700" onClick={() => dispatch({ type: "addred" })}>Add</button>
            <button className="px-4 bg-rose-500 text-white font-semibold border-none" onClick={() => dispatch({ type: "minusred" })}>
              Minus
            </button>
          </div>

          <div className="color flex gap-4">
            <h1
              className="text-2xl font-semibold tracking-wider"
              style={{ color: `rgb(0, 0, ${state.blue})` }}
            >
              blue: {state.blue}
            </h1>
            <button className="px-4 bg-blue-950 text-white font-semibold hover:border-2 hover:border-green-800 hover:text-green-700" onClick={() => dispatch({ type: "addblue" })}>Add</button>
            <button className="px-4 bg-rose-500 text-white font-semibold border-none" onClick={() => dispatch({ type: "minusblue" })}>
              Minus
            </button>
          </div>

          <div className="color flex gap-4">
            <h1
              className="text-2xl font-semibold tracking-wider"
              style={{ color: `rgb(0, ${state.green}, 0)` }}
            >
              green: {state.green}
            </h1>
            <button className="px-4 bg-blue-950 text-white font-semibold hover:border-2 hover:border-green-800 hover:text-green-700" onClick={() => dispatch({ type: "addgreen" })}>Add</button>
            <button className="px-4 bg-rose-500 text-white font-semibold border-none" onClick={() => dispatch({ type: "minusgreen" })}>
              Minus
            </button>
          </div>

          <div className="color flex gap-4">
            <h1
              className="text-2xl font-semibold tracking-wider"
              style={{
                color: `rgb(${state.yellow}, ${state.yellow}, 0)`, // Yellow in RGB format
              }}
            >
              Yellow: {state.yellow}
            </h1>
            <button className="px-4 bg-blue-950 text-white font-semibold hover:border-2 hover:border-green-800 hover:text-green-700" onClick={() => dispatch({ type: "addyellow" })}>Add</button>
            <button className="px-4 bg-rose-500 text-white font-semibold border-none" onClick={() => dispatch({ type: "minusyellow" })}>
              Minus
            </button>
          </div>

          <div className="color flex gap-4">
            <h1
              className="text-2xl font-semibold tracking-wider"
              style={{ color: `rgb(${state.purple}, 0, ${state.purple})` }}
            >
              purple: {state.purple}
            </h1>
            <button className="px-4 bg-blue-950 text-white font-semibold hover:border-2 hover:border-green-800 hover:text-green-700" onClick={() => dispatch({ type: "addpurple" })}>Add</button>
            <button className="px-4 bg-rose-500 text-white font-semibold border-none" onClick={() => dispatch({ type: "minuspurple" })}>
              Minus
            </button>
          </div>

          <div className="color flex gap-4">
            <h1
              className="text-2xl font-semibold tracking-wider"
              style={{ color: `rgb(0, 0, 0)` }}
            >
              black: {state.black}
            </h1>
            <button className="px-4 bg-blue-950 text-white font-semibold hover:border-2 hover:border-green-800 hover:text-green-700" onClick={() => dispatch({ type: "addblack" })}>Add</button>
            <button className="px-4 bg-rose-500 text-white font-semibold border-none" onClick={() => dispatch({ type: "minusblack" })}>
              Minus
            </button>
          </div>
          <button onClick={() => dispatch({ type: "reset"})}>Reset All</button>
        </div>
      </div>
    </div>
  );
};

export default MyChangeColor;


