import { IUserState, UserActionType, USERS_ACTIONS } from '../../types/User';

const initState: IUserState = {
  list: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initState, action: UserActionType): IUserState => {
  switch (action.type) {
    case USERS_ACTIONS.IS_LOADING: return { ...initState, loading: true };
    case USERS_ACTIONS.IS_LOADING_SUCCESS:
      return { ...state, loading: false, error: null, list: action.payload };
    case USERS_ACTIONS.IS_LOADING_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: return state;
  }
}
