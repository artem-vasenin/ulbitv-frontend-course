import {useDispatch, useSelector} from "react-redux";

import './App.css';
import {useState} from "react";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  const [val, setVal] = useState();

  const checkValue = () => {
    return val && Number.isInteger(+val);
  };

  const addCash = () => {
    checkValue() && dispatch({ type: 'ADD_CASH', payload: +val });
  };

  const getCash = () => {
    checkValue() && dispatch({ type: 'GET_CASH', payload: +val });
  };

  return (
    <div className="App">
      <h1>На счету: {cash || 0} руб.</h1>
      <div>
        <div>
          <input onChange={e => setVal(e.target.value)} />
        </div>
        <button onClick={addCash}>Пополнить на 10р</button>
        <button onClick={getCash}>Снять 10р</button>
      </div>
    </div>
  );
}

export default App;
