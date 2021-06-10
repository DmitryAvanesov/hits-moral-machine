import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    setImage(state, action: PayloadAction<Solution>) {
      state.solutions = state.solutions.map((solution) =>
        solution.id === action.payload.id ? action.payload : solution
      );
    },
  },
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

export const { setImage } = testSlice.actions;
export default testSlice.reducer;
