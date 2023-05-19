import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../store/reducers/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../store/reducers/counterReducer";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const inc = () => { dispatch(increment()); };
  const dec = () => { dispatch(decrement()); };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};
