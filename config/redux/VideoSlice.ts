import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';


interface AudioState {
  name: string;
  url: string;
}

const initialState: AudioState = {
  name: '',
  url: ''
}

export const AudioSlice = createSlice({
  name: 'Audio',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload
    }
  }
})

export const {
  setName,
  setUrl
} = AudioSlice.actions;

export default AudioSlice.reducer