import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface AxiosAlertMessage {
  isAxiosAlertMessage: boolean;
  url: string;
  method: string;
  code: string;
  message: string;
  status: string;
};

interface AlertMessageState {
  variant: string; // 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
  show: boolean;
  message: string;
  title: string;
  actionTitle: string;
  genericAlertMessage: AxiosAlertMessage | any;
}

const initialState: AlertMessageState = {
  variant: '',
  show: false,
  message: '',
  title: '',
  actionTitle: '',
  genericAlertMessage: null,
};

export const alertMessageSlice = createSlice({
  name: 'alertMessage',
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
    changeGenericAlertMessage: (state, action: PayloadAction<AxiosAlertMessage>) => {
      state.genericAlertMessage = action.payload;
    },
  },
});

export const { changeVariant, changeShow, changeMessage, changeTitle, changeActionTitle, changeGenericAlertMessage } = alertMessageSlice.actions;

export const selectAlertMessageVariant = (state: RootState) => state.alertMessage.variant;
export const selectAlertMessageShow = (state: RootState) => state.alertMessage.show;
export const selectAlertMessageMessage = (state: RootState) => state.alertMessage.message;
export const selectAlertMessageTitle = (state: RootState) => state.alertMessage.title;
export const selectAlertMessageActionTitle = (state: RootState) => state.alertMessage.actionTitle;
export const selectGenericAlertMessage = (state: RootState) => state.alertMessage.genericAlertMessage;

export default alertMessageSlice.reducer;










