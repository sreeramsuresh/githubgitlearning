import React, { useState } from "react";
import { MyContext } from "./MyContext";

function Provider({ children }) {
  const [myObject, setMyobject] = useState({});
  const [myArray, setMyarray] = useState([]);
  const [myString, setMystring] = useState("");

  return (
    <>
      <MyContext.Provider
        value={{
          myObject,
          setMyobject,
          myArray,
          setMyarray,
          myString,
          setMystring,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}

export default Provider;
