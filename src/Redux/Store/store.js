
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from '../Slice/counterSlice';
import  ordersubmit  from '../Slice/ordersaveslice';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:['order']
};

const reducer = combineReducers({
    counter: counterReducer,
    order: ordersubmit
})

const persistedReducer = persistReducer(persistConfig, reducer );

export const store = configureStore({
    reducer: persistedReducer,
    orderreducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);
//   export { store, persistor };

