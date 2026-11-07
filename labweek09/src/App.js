import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [student] = useState({
    title: "Welcome to Fullstack Development - I",
    lab: "React JS Programming Week09 Lab exercise",
    studentId: "101604337",
    name: "Muhammad-Amin Farhan Ali",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="React Logo" />

      <h1>{student.title}</h1>
      <h2>{student.lab}</h2>
      <h3>{student.studentId}</h3>
      <h4>{student.name}</h4>
      <h5>{student.college}</h5>
    </div>
  );
}

export default App;