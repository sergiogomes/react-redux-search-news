import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from '../pages/counter/counterSlice';
import searchTextReducer from '../core/components/header/headerSlice';
import loadingReducer from '../core/components/loading/loadingSlice';
import alertMessageReducer from '../core/components/alert-message/alertMessageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchText: searchTextReducer,
    loading: loadingReducer,
    alertMessage: alertMessageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
