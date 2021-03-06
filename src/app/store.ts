import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testReducer from "../features/test/store/testSlice";
import statisticsReducer from "../features/statistics/store/statisticsSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    statistics: statisticsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
