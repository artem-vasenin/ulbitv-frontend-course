import React, {FC} from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const UsersList: FC = () => {
  const {list} = useTypedSelector(state => state.users);
  console.log(list);

  return (
    <section>
      Hello List
    </section>
  );
};
