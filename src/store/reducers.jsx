import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../service';

export const getUsers = createAsyncThunk(
  '/users',
  async (param, { rejectWithValue }) => {
    try {
      const response = await service.getUsers();
      console.log(response);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  values: [],
};

const slicerUsers = createSlice({
  name: 'sliceUsers',
  initialState: { ...initialState },
  reducers: {
    setUsers: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log('data balikan dari api :', action.payload);
      state.values = action.payload;
    });
  },
});

export default slicerUsers.reducer;
