import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from '../pages/counter/counterSlice';
import searchTextReducer from '../core/components/header/headerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchText: searchTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
