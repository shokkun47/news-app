import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

// persistConfig設定
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// rootReducerを設定
const rootReducer = combineReducers({
  user: userReducer,
});

// persistedReducerにrootReducerを適用
const persistedReducer = persistReducer(persistConfig, rootReducer);

// storeの設定、非シリアル化エラーチェックの回避
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // persist/PERSISTアクションを無視する
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// persistorの作成
export const persistor = persistStore(store);
