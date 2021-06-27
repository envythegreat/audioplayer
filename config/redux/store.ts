import {configureStore} from  '@reduxjs/toolkit';
import { AudioSlice } from './VideoSlice';



export const store = configureStore({
  reducer: {
    video: AudioSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;