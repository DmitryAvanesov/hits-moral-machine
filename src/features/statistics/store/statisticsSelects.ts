import {RootState} from "../../../app/store";
import {createSelector} from "@reduxjs/toolkit";

export const selectStatistics = (state: RootState) => state.statistics;

export const selectStatisticsLoading = createSelector(selectStatistics, (state) => state.statsLoading);
