import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface SearchTextState {
  value: string;
}

const initialState: SearchTextState = {
  value: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeText } = searchTextSlice.actions;

export const selectSearchedText = (state: RootState) => state.searchText.value;

export default searchTextSlice.reducer;










