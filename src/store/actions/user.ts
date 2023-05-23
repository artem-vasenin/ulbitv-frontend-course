import { UserActionType, USERS_ACTIONS } from '../../types/User';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getUsers = () => {
  return async (dispatch: Dispatch<UserActionType>) => {
    dispatch({type: USERS_ACTIONS.IS_LOADING});
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({type: USERS_ACTIONS.IS_LOADING_SUCCESS, payload: resp.data});
    } catch (e) {
      dispatch({type: USERS_ACTIONS.IS_LOADING_ERROR, payload: 'Ошибка загрузки юзеров'});
    }
  };
};
