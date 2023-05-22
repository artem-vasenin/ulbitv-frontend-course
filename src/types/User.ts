export interface IUserState {
  list: any[],
  loading: boolean,
  error: null | string,
}

export enum USERS_ACTIONS {
  IS_LOADING = 'IS_LOADING',
  IS_LOADING_SUCCESS = 'IS_LOADING_SUCCESS',
  IS_LOADING_ERROR = 'IS_LOADING_ERROR',
}

interface IUserLoadingAction {
  type: USERS_ACTIONS.IS_LOADING;
}

interface IUserLoadingSuccessAction {
  type: USERS_ACTIONS.IS_LOADING_SUCCESS;
  payload: any[];
}

interface IUserLoadingErrorAction {
  type: USERS_ACTIONS.IS_LOADING_ERROR;
  payload: string;
}

export type UserActionType = IUserLoadingAction | IUserLoadingSuccessAction | IUserLoadingErrorAction;
