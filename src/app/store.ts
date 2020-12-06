import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from '../pages/counter/counterSlice';
import searchTextReducer from '../core/components/header/headerSlice';
import loadingReducer from '../core/components/loading/loadingSlice';
import errorReducer from '../core/components/error/errorSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchText: searchTextReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
