import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <>
      <div data-testid="count">{count}</div>
      <button data-testid="increase" onClick={increment}>
        +
      </button>
      <button data-testid="decrease" onClick={decrement}>
        -
      </button>
    </>
  );
};

export default Counter;
