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

export const findUsers = createAsyncThunk(
  '/findUsers',
  async (user, { rejectWithValue }) => {
    try {
      const response = await service.findUsers(user);
      console.log(response);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getUserRepo = createAsyncThunk(
  '/getUserRepo',
  async (user, { rejectWithValue }) => {
    try {
      const response = await service.getUserRepo(user);
      console.log(response);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  values: [],
  findUser: {},
  repoUser: [],
  show: false,
};

const slicerUsers = createSlice({
  name: 'sliceUsers',
  initialState: { ...initialState },
  reducers: {
    setChangeVal: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      // console.log('data balikan dari api :', action.payload);
      state.values = action.payload;
    });

    builder.addCase(findUsers.fulfilled, (state, action) => {
      state.findUser = action.payload;
    });

    builder.addCase(getUserRepo.fulfilled, (state, action) => {
      state.repoUser = action.payload;
    });
  },
});
export const { setChangeVal } = slicerUsers.actions;
export default slicerUsers.reducer;
