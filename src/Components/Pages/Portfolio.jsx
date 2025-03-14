import React, { useContext } from "react";
import SampleCards from "../Common/SampleCard";
import { MyContext } from "../UseContext/MyContext";

function Portfolio() {
  const { myObject } = useContext(MyContext);

  return (
    <>
      <SampleCards Title={"Portfolio"} />
      <h1>{myObject?.name}</h1>
      <h1>{myObject?.age}</h1>
      <h1>{myObject?.location}</h1>
    </>
  );
}

export default Portfolio;
