import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './movieReducer';

export const store = configureStore({
  reducer: {
    // Tên 'movieReducer' này phải khớp với tên bạn dùng trong useSelector
    movieReducer: movieReducer,
  },
});