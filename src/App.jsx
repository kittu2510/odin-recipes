import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/app.css";

function App() {
  return (
    <div className="container">
      <h1>CV Generator</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
