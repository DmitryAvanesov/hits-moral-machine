import { RootState } from "../../../app/store";
import { createSelector } from "@reduxjs/toolkit";
import { TestState } from "./testSlice";

export const selectTest = (state: RootState): TestState => state.test;

export const selectDilemmas = createSelector(
  selectTest,
  (state) => state.dilemmas
);

export const selectSolutions = createSelector(
  selectTest,
  (state) => state.solutions
);

export const selectTestLoading = createSelector(
  selectTest,
  (state) => state.testLoading
);
