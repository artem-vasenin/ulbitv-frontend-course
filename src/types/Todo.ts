export interface ITodoState {
  list: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionsTypes {
  IS_LOADING = 'IS_LOADING',
  IS_LOADING_SUCCESS = 'IS_LOADING_SUCCESS',
  IS_LOADING_ERROR = 'IS_LOADING_ERROR',
  SET_PAGE = 'SET_PAGE',
}

interface ITodoLoadingAction {
  type: TodoActionsTypes.IS_LOADING;
}

interface ITodoLoadingSuccessAction {
  type: TodoActionsTypes.IS_LOADING_SUCCESS;
  payload: any[];
}

interface ITodoLoadingErrorAction {
  type: TodoActionsTypes.IS_LOADING_ERROR;
  payload: string;
}

interface ITodoSetPageAction {
  type: TodoActionsTypes.SET_PAGE;
  payload: number;
}

export type TodoActionType = ITodoLoadingAction | ITodoLoadingSuccessAction | ITodoLoadingErrorAction
  | ITodoSetPageAction;
