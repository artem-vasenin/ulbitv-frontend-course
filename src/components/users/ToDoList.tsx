import React, { FC, useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const ToDoList: FC = () => {
  const {getTodos} = useActions();
  const {loading, list, error, page, limit} = useTypedSelector(state => state.todo);

  useEffect(() => {
    getTodos(page, limit);
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
      <ol>{list.map(u => <li key={u.id}>{u.id} - {u.title}</li>)}</ol>
    </section>
  );
};
