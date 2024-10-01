import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counter";

export const store = configureStore({
  reducer: {
    counter,
  },
});
