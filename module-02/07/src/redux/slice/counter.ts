import { createSlice } from "@reduxjs/toolkit";

export interface ICount {
  count: number;
  isBoolean: boolean;
}

interface IPayload {
  payload: number;
}

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: ICount) => {
      state.count += 1;
    },
    decrement: (state: ICount) => {
      state.count -= 1;
    },
    incrementByAmount: (state: ICount, action: IPayload) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
