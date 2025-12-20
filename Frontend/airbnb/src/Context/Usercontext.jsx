import React, { createContext, useState } from "react";
export let dataContext = createContext();
function Usercontext({ children }) {
  let [title, setTitle] = useState("");
  let [addListing, setaddListing] = useState(false);
  let [addImage1, setaddImage1] = useState(null);
  let [addImage2, setaddImage2] = useState(null);
  let [addImage3, setaddImage3] = useState(null);
  let [price,setPrice] = useState(null)
  let value = {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setPrice
  }

  return (
    <div>
      <dataContext.Provider value={value}>
        {children}
        </dataContext.Provider>
    </div>
  );
}

export default Usercontext;
