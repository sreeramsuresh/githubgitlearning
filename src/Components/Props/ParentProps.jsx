import React from "react";
import ChildProps from "./ChildProps";
import { useState, useEffect } from "react";

function ParentProps() {
  const [name, setName] = useState("");
  // const name = "ParentProps";

  //api call store to usestate

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("data::", data);
    console.log("data", data.title);
    setName(data.title);
  };

  useEffect(() => {
    //api call
    fetchData();
  }, []);

  const handleChildProps = (value) => {
    console.log(value);
    //output: ChildProps
  };

  return (
    <>
      <ChildProps name={name} handleChildProps={handleChildProps} />
    </>
  );
}

export default ParentProps;
