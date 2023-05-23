import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/user';

export const UsersList: FC = () => {
  const dispatch = useDispatch();
  const {loading, list, error} = useTypedSelector(state => state.users);

  useEffect(() => {
    // @ts-ignore
    dispatch(getUsers());
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
