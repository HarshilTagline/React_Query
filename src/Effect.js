import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom'

export default function Effect() {
  const [count, setCount] = useState(0);
  //   const [cal, setCal] = useState(1);

  useEffect(() => {
    let timer = setTimeout(() => setCount((cal) => cal + 2), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Count is {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>click</button> */}
      {/* <h3>calculation is {cal}</h3> */}
    </div>
  );
}
