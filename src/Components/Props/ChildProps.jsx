import React from "react";

function ChildProps({ name, handleChildProps }) {
  console.log("childprops", name);

  handleChildProps("ChildProps");
  //output: ParentProps
  return <div>ChildProps</div>;
}

export default ChildProps;
