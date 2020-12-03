import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface LoadingState {
  loadingOpened: number;
}

const initialState: LoadingState = {
  loadingOpened: 0,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loadingOpened ++;
    },
    hideLoading: (state) => {
      if (state.loadingOpened) state.loadingOpened --;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export const selectLoadingState = (state: RootState): number => state.loading.loadingOpened;

export default loadingSlice.reducer;
