import React from "react";
import { useRef } from "react";

const UzColor = () => {
  const title = useRef();
  const date = useRef();
  const location = useRef("Tashkent");

  console.log("rendering...");

  const resetInputs = () => {
    title.current.value = "";
    date.current.value = "";
    location.current.value = "Tashkent";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title.current.value, date.current.value, location.current.value);

    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location.current.value,
    };

    const newEvent = (event) => {
    };

    newEvent(event);
    resetInputs();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-8 w-2/3">
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-semibold mb-2">
            Event title:
          </label>
          <input
            placeholder="Enter event title"
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            ref={title}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-semibold mb-2">
            Event date:
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            ref={date}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-semibold mb-2">
            Event location:
          </label>
          <select
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={location}
          >
            <option value="tashkent">Tashkent</option>
            <option value="qashqadaryo">Qashqadaryo</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
          <button
            onClick={resetInputs}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Reset
          </button>
        </div>

        <div className="new">
          
        </div>
      </form>
    </div>
  );
};

export default UzColor;
