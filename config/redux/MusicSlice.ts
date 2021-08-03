import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AudioObj } from '../types';

interface MusicObj {
  listMusic: AudioObj[]
}

const initialState: MusicObj =  {
  listMusic: []
}

export const MusicSlice = createSlice({
  name: "MusicSlice",
  initialState,
  reducers: {
    addMusic: (state, action: PayloadAction<AudioObj[]>) => {
      state.listMusic = action.payload
    }
  }
})

export const {addMusic} = MusicSlice.actions
export default MusicSlice.reducer