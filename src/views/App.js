import React, { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;

const Counter = () => {
  const [count, setCounter] = useState(0);
  return (
    <React.Fragment>
      {count}{" "}
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
      >
        Add
      </button>
    </React.Fragment>
  );
};
