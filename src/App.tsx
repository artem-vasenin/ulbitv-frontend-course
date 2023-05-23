import React from 'react';
import { UsersList } from './components/users/UsersList';
import { ToDoList } from './components/users/ToDoList';

function App() {
  return (
    <div className="App">
      <UsersList />
      <br />
      <ToDoList />
    </div>
  );
}

export default App;
