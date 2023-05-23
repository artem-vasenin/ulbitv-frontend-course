import * as UserActionCreators from './user';
import * as ToDoActionCreators from './todo';

export default {
  ...UserActionCreators,
  ...ToDoActionCreators,
};

