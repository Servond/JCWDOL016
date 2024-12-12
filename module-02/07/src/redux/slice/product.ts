import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface IUSlice {
  user: IUser[];
  count: number;
}

interface IPayload {
  user: IUser;
  count: number;
}

const initialState = {
  user: [],
};

const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state: IUSlice) => {
      state.user = [...state.user];
    },
    decrement: (state: ICount) => {
      state.count -= 1;
    },
    incrementByAmount: (state: ICount, action: IPayload) => {
      state.count += action.count;
      state.user = action.user;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
