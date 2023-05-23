import { IUser } from '../../models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsersList } from './actionCreator';

interface IUserState {
  list: IUser[];
  loader: boolean;
  error: string;
}

const initialState: IUserState = {
  list: [],
  loader: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getUsersList.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.loader = false;
      state.error = '';
      state.list = action.payload;
    },
    [getUsersList.pending.type]: (state) => {
      state.loader = true;
    },
    [getUsersList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
