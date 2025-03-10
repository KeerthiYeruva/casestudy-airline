import { configureStore } from '@reduxjs/toolkit';
import checkInReducer from './slices/checkInSlice';
import adminReducer from './slices/adminSlice';
// import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    checkIn: checkInReducer,
    admin: adminReducer,
    // auth: authReducer,
  },
});

export default store;