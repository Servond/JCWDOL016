import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counter";
// import product

export const store = configureStore({
  reducer: {
    counter,
    product,
  },
});
