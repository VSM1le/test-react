import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateForm from "./components/CreateForm";
import GetData from "./components/GetData";

function App() {
  return (
    <>
      <div className="left-right">
        <div style={{ width: "full" }}>
          <div>
            <CreateForm />
          </div>
        </div>
        <div style={{ width: "700px" }}>
          <div style={{ width: "full" }}>
            <GetData />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
