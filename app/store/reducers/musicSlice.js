"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk("order/fetchOrder", () => {
  return fetch('/api/songs').then(response => response.json()).then(res => res)
})

const initialState = {
  loading: false,
  dataContainer: [],
  error: null,
  data: [],
  currentSong: null,
  favList: []
}

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setFavouriteSong: (state, action) => {
      const isOld = state.favList.map((item) => item.id).includes(action.payload.id);
      if (isOld) {
        state.favList = state.favList.filter(e => e.id !== action.payload.id);
      } else {
        state.favList = [...state.favList, action.payload];
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.dataContainer = action.payload;
      state.error = null;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.dataContainer = [];
      state.error = action.error.message;
    });
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentSong, setFavouriteSong } = musicSlice.actions

export default musicSlice.reducer