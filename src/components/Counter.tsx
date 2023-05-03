import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className="counter">{count}</div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count +1)}>+</button>
      </div>
    </section>
  );
};
