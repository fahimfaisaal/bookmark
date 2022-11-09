import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
});

// export const {} = booksSlice.actions;
export default booksSlice.reducer;
