"use client";

import { configureStore } from '@reduxjs/toolkit'
import musicReducer from './reducers/musicSlice'

export const store = configureStore({
  reducer: {
    music: musicReducer
  },
})