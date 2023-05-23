import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getUsersList } from './store/reducers/actionCreator';

function App() {
  const { list, loader, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  if (loader) return <h1>Загрузка...</h1>
  if (error) return <h1>{error}</h1>
  if (!error && !loader && !list.length) return <h1>Список пуст</h1>

  return (
    <div className="App">
      <h1>Users</h1>
      {list.map(i => (
        <ol key={i.id}>
          <li>{i.id}. {i.name}</li>
        </ol>
      ))}
    </div>
  );
}

export default App;
