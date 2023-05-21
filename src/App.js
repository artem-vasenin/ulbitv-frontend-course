import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addCashAction, getCashAction} from "./store/cashReducer";
import {addCustomerAction, delCustomerAction} from "./store/customerReducer";
import './App.css';
import {fetchCustomers} from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const [val, setVal] = useState();
  const [name, setName] = useState();

  const checkValue = () => {
    return val && Number.isInteger(+val);
  };

  const addCash = () => {
    checkValue() && dispatch(addCashAction(+val));
    setVal('');
  };

  const getCash = () => {
    checkValue() && dispatch(getCashAction(+val));
    setVal('');
  };

  const addCustomer = () => {
    name && dispatch(addCustomerAction(name));
    setName('');
  };

  const addCustomers = () => {
    dispatch(fetchCustomers());
  };

  const removeCustomer = (customer) => {
    customer && dispatch(delCustomerAction(customer));
  };

  return (
    <div className="App">
      <h1>На счету: {cash || 0} руб.</h1>
      <div>
        <div>
          <input onChange={e => setVal(e.target.value)} value={val} />
        </div>
        <button onClick={addCash}>Пополнить на 10р</button>
        <button onClick={getCash}>Снять 10р</button>
      </div>

      <h2>Пользователи</h2>
      {customers && customers.length ? (
        <ul>{ customers.map((item, i) => (
          <li key={i} onClick={() => removeCustomer(item)}>{item}</li>
        )) }</ul>
      ) : <p>Пользователей нет</p>}
      <div>
        <input onChange={e => setName(e.target.value)} value={name} />
      </div>
      <button onClick={addCustomer}>Добавить</button>
      <button onClick={addCustomers}>Добавить 10</button>
    </div>
  );
}

export default App;
