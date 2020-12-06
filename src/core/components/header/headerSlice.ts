import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface SearchTextState {
  text: string;
  page: number;
}

const initialState: SearchTextState = {
  text: '',
  page: 1,
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { changeText, changePage } = searchTextSlice.actions;

export const selectSearchedText = (state: RootState) => state.searchText.text;
export const selectSearchedPage = (state: RootState) => state.searchText.page;

export default searchTextSlice.reducer;










