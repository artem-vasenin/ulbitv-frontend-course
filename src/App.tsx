import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/userSlice';

function App() {
  const { count } = useAppSelector(state => state.userReducer);
  const { inc } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(inc(1))}>INC</button>
    </div>
  );
}

export default App;
