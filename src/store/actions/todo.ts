import axios from 'axios';
import { Dispatch } from 'redux';

import { TodoActionsTypes, TodoActionType } from '../../types/Todo';

export const getTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActionType>) => {
    dispatch({type: TodoActionsTypes.IS_LOADING});
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      });
      dispatch({type: TodoActionsTypes.IS_LOADING_SUCCESS, payload: resp.data});
    } catch (e) {
      dispatch({type: TodoActionsTypes.IS_LOADING_ERROR, payload: 'Ошибка загрузки списка'});
    }
  };
};

export const setTodoPage = (page: number): TodoActionType => {
  return { type: TodoActionsTypes.SET_PAGE, payload: page }
};
