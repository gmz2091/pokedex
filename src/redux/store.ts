import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import darkMode from './reducers/darkModeReducer';

export const store = configureStore({
  reducer: {
    darkMode: darkMode,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
