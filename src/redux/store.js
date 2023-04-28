import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersApi } from 'services/usersApi';
import { usersReducer } from './usersSlice/usersSlice';

const persistConfig = {
  key: 'users',
  storage,
};

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: persistReducer(persistConfig, usersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([usersApi.middleware]),
});

export const persistor = persistStore(store);
