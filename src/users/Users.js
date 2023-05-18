import axios from 'axios';
import {useEffect, useState} from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(resp.data);
  };

  useEffect(() => {
    (async () => {
      await getUsers();
    })()
  }, []);

  return (
    <div>
      {users.length ? users.map(u => (
        <div key={u.id} data-testid="user-item">{u.name}</div>
      )) : null}
    </div>
  );
};
