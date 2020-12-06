import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface ErrorState {
  variant: string; // 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
  show: boolean;
  message: string;
  title: string;
  action: object | any;
  actionTitle: string;
}

const initialState: ErrorState = {
  variant: '',
  show: false,
  message: '',
  title: '',
  action: null,
  actionTitle: ''
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<string>) => {
      state.variant = action.payload;
    },
    changeShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeAction: (state, action: PayloadAction<object | null>) => {
      state.action = action.payload;
    },
    changeActionTitle: (state, action: PayloadAction<string>) => {
      state.actionTitle = action.payload;
    },
  },
});

export const { changeVariant, changeShow, changeMessage, changeTitle, changeAction, changeActionTitle } = errorSlice.actions;

export const selectErrorVariant = (state: RootState) => state.error.variant;
export const selectErrorShow = (state: RootState) => state.error.show;
export const selectErrorMessage = (state: RootState) => state.error.message;
export const selectErrorTitle = (state: RootState) => state.error.title;
export const selectErrorAction = (state: RootState) => state.error.action;
export const selectErrorActionTitle = (state: RootState) => state.error.actionTitle;

export default errorSlice.reducer;










