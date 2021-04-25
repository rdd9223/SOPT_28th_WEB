import React, { useState, useEffect } from "react";

function Hello({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{name}</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Hello;
