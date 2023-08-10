import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isSellerAuthenticated: false,
};

const shopReducer = createReducer(initialState, {
  LoadShopRequest: (state) => {
    state.isLoading = true;
  },
  LoadShopSuccess: (state, action) => {
    state.isLoading = false;
    state.isSellerAuthenticated = true;
    state.user = action.payload;
  },
  LoadShopFail: (state, action) => {
    state.isLoading = false;
    state.isSellerAuthenticated = false;
    state.isError = action.payload;
  },
  clearShopErrors: (state) => {
    state.isError = null;
  },
});

export default shopReducer;
