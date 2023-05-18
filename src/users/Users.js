import axios from 'axios';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
        <Link
          key={u.id}
          data-testid="user-item"
          to={`/users/${u.id}`}
        >{u.name}</Link>
      )) : null}
    </div>
  );
};
