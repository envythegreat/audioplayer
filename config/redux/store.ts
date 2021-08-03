import {configureStore} from  '@reduxjs/toolkit';
import { TrackSlice } from './keepTackSlice';
import {MusicSlice} from './MusicSlice';
import { AudioSlice } from './VideoSlice';



export const store = configureStore({
  reducer: {
    video: AudioSlice.reducer,
    tracker: TrackSlice.reducer,
    music: MusicSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;