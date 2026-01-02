import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen bg-black lg:flex text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 items-start lg:w-1/2 gap-5 flex-col"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/* First Input */}
        <input
          type="text"
          placeholder="Enter Notes Title"
          className="px-5 w-full py-2 font-medium border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Write Details here.."
          className="px-5 py-2 h-32 font-medium w-full border-2 outline-none rounded"
          name=""
          id=""
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="text-black active:bg-gray-200 bg-white px-5 py-2 w-full outline-none font-medium rounded">
          Add Note
        </button>
      </form>

      <div className=" lg:w-1/2  bg-gray-900 p-10  ">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between h-52 w-48 bg-cover rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] px-4 py-6 "
              >
                <div>
                  <h3 className="text-black font-bold leading-tight ">
                    {elem.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">{elem.details}</p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full bg-red-500 cursor-pointer active:scale-95 text-white text-sm rounded "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
