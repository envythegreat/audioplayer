import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Tracker {
  status: "Converting" | "Downloading" | "None";
  progress: number;
}

const initialState: Tracker = {
  status: "None",
  progress: 0
}