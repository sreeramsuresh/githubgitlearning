import React from "react";
import "./App.css";
import Router from "./Components/Router/Router";
import Provider from "./Components/UseContext/Provider";

function App() {
  return (
    <>
      <Provider>
        <Router />
      </Provider>
    </>
  );
}

export default App;
