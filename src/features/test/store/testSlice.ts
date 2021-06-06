import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testApi } from "../api/testApi";
import { Dilemma } from "../interfaces/dilemma";
import { Solution } from "../interfaces/solution";

export interface TestState {
  dilemmas: Dilemma[];
  solutions: Solution[];
  testLoading: boolean;
}

export const initialState: TestState = {
  dilemmas: [],
  solutions: [],
  testLoading: false,
};

export const fetchTest = createAsyncThunk("test/fetchTest", async () => {
  const response = await testApi.fetchTest();
  return response;
});

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTest.pending, (state) => {
        state.testLoading = true;
      })
      .addCase(fetchTest.fulfilled, (state, { payload }) => {
        state.testLoading = false;
        state.dilemmas = payload.dilemmas;
        state.solutions = payload.solutions;
      });
  },
});

export default testSlice.reducer;
