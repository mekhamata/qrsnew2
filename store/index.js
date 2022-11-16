import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './slices/generalSlice';

// config the store
const store = configureStore({
  reducer: {
    generaldata: generalSlice,
  },
});

// export default the store
export default store;
