import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className={cls.counter}>{count}</div>
      {/*<div>{count}</div>*/}
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count +1)}>+</button>
      </div>
    </section>
  );
};
