import React, { useState } from "react";

function App() {
  let [a, b] = useState("");
  let [c, d] = useState([]);

  function todoText(event) {
    b(event.target.value);
  }
  function clicked() {
    d(function x(prev) {
      console.log(prev);
      return [...prev, a];
    });
    b("");
  }

  function iteration(item) {
    return <li>{item}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={todoText} type="text" value={a} />

        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{c.map(iteration)}</ul>
      </div>
    </div>
  );
}

export default App;
