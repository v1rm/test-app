import React from "react";

const fruitObj = [
  { name: "mango", tree: "tree" },
  { name: "Apple", tree: "Apple tree" },
  { name: "Avocado", tree: " Avocado tree" },
];

const App = () => {
  // const [count, setCounter] = useState(0);
  return (
    <div className="App">
      {/* <Counter name={fruitObj.name} tree={fruitObj.tree} /> */}
      {fruitObj?.map((value, index) => (
        <React.Fragment key={index}>
          {index} <Card name={value.name} tree={value.tree} />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;

const Card = ({ name, tree }) => {
  return (
    <React.Fragment>
      {name} - {tree}
      {/* {props?.name} - {props?.tree} */}
      {/* /{props?.count} <button onClick={props?.addCount}>Add</button> */}
    </React.Fragment>
  );
};
