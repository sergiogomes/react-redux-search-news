import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface AxiosError {
  isAxiosError: boolean;
  url: string;
  method: string;
  code: string;
  message: string;
  status: string;
};

interface ErrorState {
  variant: string; // 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
  show: boolean;
  message: string;
  title: string;
  actionTitle: string;
  genericError: AxiosError | any;
}

const initialState: ErrorState = {
  variant: '',
  show: false,
  message: '',
  title: '',
  actionTitle: '',
  genericError: null,
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
    changeActionTitle: (state, action: PayloadAction<string>) => {
      state.actionTitle = action.payload;
    },
    changeGenericError: (state, action: PayloadAction<AxiosError>) => {
      state.genericError = action.payload;
    },
  },
});

export const { changeVariant, changeShow, changeMessage, changeTitle, changeActionTitle, changeGenericError } = errorSlice.actions;

export const selectErrorVariant = (state: RootState) => state.error.variant;
export const selectErrorShow = (state: RootState) => state.error.show;
export const selectErrorMessage = (state: RootState) => state.error.message;
export const selectErrorTitle = (state: RootState) => state.error.title;
export const selectErrorActionTitle = (state: RootState) => state.error.actionTitle;
export const selectGenericError = (state: RootState) => state.error.genericError;

export default errorSlice.reducer;










