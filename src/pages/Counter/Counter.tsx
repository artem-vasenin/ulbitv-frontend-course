import { Counter as CounterCmp } from '../../components/Counter';
import cls from './Counter.module.scss';

const Counter = () => {
  return (
    <div className={cls.section}>
      <CounterCmp />
    </div>
  );
};

export default Counter;
