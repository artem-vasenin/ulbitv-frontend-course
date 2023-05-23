import { IUser } from '../../models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  list: IUser[];
  loader: boolean;
  error: string;
  count: number;
}

const initialState: IUserState = {
  list: [],
  loader: false,
  error: '',
  count: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    inc(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export default userSlice.reducer;
