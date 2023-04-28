import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      const index = state.users.findIndex(user => user.id === action.payload);
      if (!index) {
        throw new Error('User not found!');
      }
      state.users.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
