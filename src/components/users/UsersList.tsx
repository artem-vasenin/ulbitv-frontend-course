import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUsers } from '../../store/actions/user';
import { useActions } from '../../hooks/useActions';

export const UsersList: FC = () => {
  const {getUsers} = useActions();
  const {loading, list, error} = useTypedSelector(state => state.users);

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h3>Загрузка...</h3>
  }

  if (error) {
    return <h3>{error}</h3>
  }

  if (!error && !loading && !list.length) {
    return <h3>Пользователи не найдены</h3>
  }

  return (
    <section>
      <ol>{list.map(u => <li key={u.id}>{u.name}</li>)}</ol>
    </section>
  );
};
