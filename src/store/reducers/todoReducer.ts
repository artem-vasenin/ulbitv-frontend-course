import { ITodoState, TodoActionsTypes, TodoActionType } from '../../types/Todo';

const initState: ITodoState = {
  list: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todoReducer = (state = initState, action: TodoActionType): ITodoState => {
  switch (action.type) {
    case TodoActionsTypes.IS_LOADING: return { ...initState, loading: true };
    case TodoActionsTypes.IS_LOADING_SUCCESS:
      return { ...state, loading: false, error: null, list: action.payload };
    case TodoActionsTypes.IS_LOADING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionsTypes.SET_PAGE:
      return { ...state, page: action.payload };
    default: return state;
  }
}
