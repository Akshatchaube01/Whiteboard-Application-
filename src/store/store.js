import { configureStore } from '@reduxjs/toolkit'; 
import whiteboardSliceReducer from "../Whiteboard/whiteboardSlice.js";

export const store = configureStore({
  reducer: {
    whiteboard: whiteboardSliceReducer,
  },
});
