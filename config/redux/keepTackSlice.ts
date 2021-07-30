import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Tracker {
  status: "Converting" | "Downloading" | "None" | "Download";
  progress: number;
}

const initialState: Tracker = {
  status: "None",
  progress: 0
}

export const TrackSlice = createSlice({
  name: 'Tracker',
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setStatus: (state, action:PayloadAction<"Converting" | "Downloading" | "None" | "Download" >) => {
      state.status = action.payload
    }
  }
})

export const {setProgress, setStatus} = TrackSlice.actions;
export default TrackSlice.reducer 