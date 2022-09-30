import { rootReducer } from './reducer';
import { persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import session from './session';

export * from './reducer';

const store = configureStore({
    reducer: session.reducer,
});

export default store;