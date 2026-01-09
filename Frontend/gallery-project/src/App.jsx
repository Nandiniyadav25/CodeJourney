import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")|| "dark"
  )

  const getData = async () => {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printData = <h3 className="text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-sm ">Loading...</h3>;

  if (userData.length > 0) {
    printData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black" }overflow-auto h-screen p-4 transition-all duration-300`}>
     <div className="flex justify-between">
      <h1 className="font-bold text-4xl text-indigo-400">Photos Gallery</h1>
      <button onClick={()=> {
        const newTheme = theme === "dark" ? "light":"dark";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme)
      }}
      className="px-4 py-2 rounded bg-indigo-400 text-white text-sm">
        {theme === "dark" ? "Light Mode": "Dark Mode"}
      </button>
      </div>

      <div className="flex flex-wrap gap-5 h-[75%] mt-10">{printData}</div>
      <div className="p-4 flex justify-center items-center gap-6">
        <button style={{opacity: index ==1 ? 0.5:1}} className="bg-amber-400 text-black rounded font-semibold cursor-pointer text-sm active:scale-95 px-4 py-2"
        onClick={()=> {
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
        <h3 className="text-indigo-400">Page {index}</h3>

        <button className="bg-amber-400 text-black rounded font-semibold cursor-pointer text-sm active:scale-95 px-4 py-2"
        onClick={()=> {
          setUserData([])
          setIndex(index+1)
          
        }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
