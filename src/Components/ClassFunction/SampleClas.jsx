import React, { useState } from "react";

function SampleClas() {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");

  const handleChange = (e) => {
    setfirst(e.target.value);
  };

  const handleChange2 = (e) => {
    setsecond(e.target.value);
  };

  return (
    <>
      <input type="text" value={first} onChange={handleChange} />
      <h1>{first}</h1>

      <input type="text" value={second} onChange={handleChange2} />
      <h1>{second}</h1>
    </>
  );
}

export default SampleClas;
