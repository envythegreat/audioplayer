import {configureStore} from  '@reduxjs/toolkit';
import { TrackSlice } from './keepTackSlice';
import { AudioSlice } from './VideoSlice';



export const store = configureStore({
  reducer: {
    video: AudioSlice.reducer,
    tracker: TrackSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;