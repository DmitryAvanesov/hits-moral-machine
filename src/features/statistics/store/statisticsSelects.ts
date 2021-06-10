import { RootState } from "../../../app/store";
import { createSelector } from "@reduxjs/toolkit";
import { StatisticsState } from "./statisticsSlice";

export const selectStatistics = (state: RootState): StatisticsState =>
  state.statistics;

export const selectStatisticsLoading = createSelector(
  selectStatistics,
  (state) => state.statsLoading
);
export const selectStats = createSelector(
  selectStatistics,
  (state) => state.stats
);
export const selectFromDate = createSelector(
  selectStatistics,
  (state) => state.fromDate
);
export const selectToDate = createSelector(
  selectStatistics,
  (state) => state.toDate
);
