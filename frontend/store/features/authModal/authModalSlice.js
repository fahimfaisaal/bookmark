import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginModal: false,
  registerModal: false
};

const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
    openRegisterModal: (state) => {
      state.registerModal = true;
    },
    closeRegisterModal: (state) => {
      state.registerModal = false;
    }
  }
});

export const {
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal
} = authModalSlice.actions;

export default authModalSlice.reducer;
