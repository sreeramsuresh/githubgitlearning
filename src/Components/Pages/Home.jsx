import React, { useContext } from "react";
import SampleCards from "../Common/SampleCard";
import { Button } from "react-bootstrap";
import { MyContext } from "../UseContext/MyContext";

function Home() {
  const { setMyobject } = useContext(MyContext);
  const { myObject } = useContext(MyContext);

  const myNewObject = {
    name: "John Doe",
    age: 25,
    location: "USA",
  };

  const handlChange = () => {
    setMyobject(myNewObject);
    console.log(myObject);
  };
  return (
    <>
      <SampleCards Title={"Home"} />
      <Button onClick={handlChange}>Submit</Button>
    </>
  );
}

export default Home;
