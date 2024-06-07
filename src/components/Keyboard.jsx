import React, { useState } from "react";

function Keyboard() {
  const [input, setInputValue] = useState("");
  const [capsOn, setCapsOn] = useState(false);
  const [color, setColor] = useState("white");

  const handleOnClick = (value) => {
    setInputValue((prevVal) => prevVal + value);
  };

  const handleDeleteCLick = () => {
    const value = input;
    const newVal = value.substring(0, value.length - 1);
    setInputValue(newVal);
  };

  const toggleCaps = () => {
    setCapsOn((prev) => !prev);
  };

  const keysRow1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
  const keysRow2 = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "/",
  ];
  const keysRow3 = ["a", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/"];
  const keysRow4 = ["z", "x", "c", "v", "b", "n", "m", "<", ">", "?"];
  return (
    <>
      <div className="h-screen pt-2" style={{ backgroundColor: color }}>
        <div className="text-right pt-4 pr-1">
          <span
            className="bg-red-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer py-2 px-5 mr-1 rounded-full"
            onClick={() => setColor("red")}
          ></span>
          <span
            className="bg-blue-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer py-2 px-5 mr-1 rounded-full"
            onClick={() => setColor("blue")}
          ></span>
          <span
            className="bg-green-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer py-2 px-5 mr-1 rounded-full"
            onClick={() => setColor("green")}
          ></span>
          <span
            className="bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer py-2 px-5 mr-1 rounded-full"
            onClick={() => setColor("white")}
          ></span>
          <span
            className="bg-gray-800  shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer py-2 px-5 mr-1 rounded-full"
            onClick={() => setColor("black")}
          ></span>
        </div>
        <div className="flex justify-center items-center mt-14">
          <div
            id="keyboard"
            className="bg-gray-200 p-8 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mx-auto py-8"
          >
            <h1 className="text-center font-semibold text-xl mb-4">
              Virtual Keyboard
            </h1>
            <input
              type="text"
              id="input"
              placeholder="Write Here"
              className="w-full bg-white rounded-md px-4 py-2 mb-4 font-medium border border-gray-300 focus:outline-none shadow-xl"
              value={input}
              readOnly
            />
            <div id="row-1" className="flex justify-center space-x-2">
              {keysRow1.map((key) => (
                <button
                  className="keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                  key={key}
                  onClick={() =>
                    handleOnClick(capsOn ? key.toUpperCase() : key)
                  }
                >
                  {capsOn ? key.toUpperCase() : key}
                </button>
              ))}
              <button
                className="shift-key keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                onClick={handleDeleteCLick}
              >
                Delete
              </button>
            </div>
            <div id="row-2" className="flex justify-center space-x-2">
              <button className="shift-key keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500">
                Tabs
              </button>
              {keysRow2.map((key) => (
                <button
                  className="keys w-9/12 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                  key={key}
                  onClick={() =>
                    handleOnClick(capsOn ? key.toUpperCase() : key)
                  }
                >
                  {capsOn ? key.toUpperCase() : key}
                </button>
              ))}
            </div>
            <div id="row-3" className="flex justify-center space-x-2">
              <button
                id="caps-key"
                className="keys px-11 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                // onClick={() => setCapsOn(!capsOn)}
                onClick={toggleCaps}
              >
                {capsOn ? (
                  <span className={`text-green-400 duration-150`}>Caps</span>
                ) : (
                  <span>Caps</span>
                )}
              </button>
              {keysRow3.map((key) => (
                <button
                  className="keys w-9/12 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                  key={key}
                  onClick={() =>
                    handleOnClick(capsOn ? key.toUpperCase() : key)
                  }
                >
                  {capsOn ? key.toUpperCase() : key}
                </button>
              ))}
              <button className="shift-key keys px-14 py-2 text-white shadow-xl mt-2 rounded bg-gray-500">
                Enter
              </button>
            </div>
            <div id="row-4" className="flex justify-center space-x-2">
              <button className="shift-key keys px-14 py-2 text-white shadow-xl mt-2 rounded bg-gray-500">
                Shift
              </button>
              {keysRow4.map((key) => (
                <button
                  className="keys w-9/12 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                  key={key}
                  onClick={() =>
                    handleOnClick(capsOn ? key.toUpperCase() : key)
                  }
                >
                  {capsOn ? key.toUpperCase() : key}
                </button>
              ))}
              <button className="shift-key keys px-14 py-2 text-white shadow-xl mt-2 rounded bg-gray-500">
                Shift
              </button>
            </div>
            <div id="row-5" className="flex justify-center space-x-2">
              <button
                id="control-key"
                className="keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
              >
                Ctrl
              </button>
              <button
                id="win-key"
                className="keys px-7 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
              >
                Win
              </button>
              <button
                id="alt-key"
                className="keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
              >
                Alt
              </button>
              <button
                id="space-key"
                className="keys px-60 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                onClick={() => handleOnClick(" ")}
              >
                Space
              </button>
              <button
                id="alt-key"
                className="keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
              >
                Alt
              </button>
              <button
                id="win-key"
                className="keys px-6 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
                onClick={() => setInputValue("")}
              >
                Clear
              </button>
              <button
                id="control-key-2"
                className="keys px-8 py-2 text-white shadow-xl mt-2 rounded bg-gray-500"
              >
                Ctrl
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
