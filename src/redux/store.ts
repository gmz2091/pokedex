import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {darkMode, accountReducer, pokemonReducer} from './reducers';

export const store = configureStore({
  reducer: {
    darkMode: darkMode,
    accountReducer: accountReducer,
    pokemonReducer: pokemonReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
