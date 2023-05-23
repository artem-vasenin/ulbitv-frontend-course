import axios from 'axios';

import { IUser } from '../../models/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersList = createAsyncThunk(
  'user/getUsersList',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки')
    }
  },
);
