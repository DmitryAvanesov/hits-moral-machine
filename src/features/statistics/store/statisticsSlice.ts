import { StatisticsElement } from "../interfaces/statisticsElement";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statisticsApi } from "../api/statisticsApi";

export interface StatisticsState {
  stats: StatisticsElement[];
  statsLoading: boolean;
}

export const initialState: StatisticsState = {
  stats: [],
  statsLoading: false,
};

export const fetchStatistics = createAsyncThunk(
  "statistics/fetchStatistics",
  async () => {
    const response = await statisticsApi.fetchStatistics();

    return response;
  }
);

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.statsLoading = true;
      })
      .addCase(fetchStatistics.fulfilled, (state, { payload }) => {
        state.statsLoading = false;
        state.stats = payload;
      });
  },
});

export default statisticsSlice.reducer;
