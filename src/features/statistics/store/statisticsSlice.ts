import {StatisticsElement} from "../interfaces/statisticsElement";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {statisticsApi} from "../api/statisticsApi";
import {stat} from "fs";

export interface StatisticsState {
    stats: StatisticsElement[];
    statsLoading: boolean;
    fromDate: Date;
    toDate: Date;
}

export const initialState: StatisticsState = {
    stats: [],
    statsLoading: false,
    fromDate: new Date('06/01/2021'),
    toDate: new Date(),
}

export const fetchStatistics = createAsyncThunk(
    'statistics/fetchStatistics',
    async () => {
        const response = await statisticsApi.fetchStatistics();

        return response;
    }
)

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        setFromDate: (state, action: PayloadAction<Date>) => {
            state.fromDate = action.payload;
        },
        setToDate: (state, action: PayloadAction<Date>) => {
            state.toDate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStatistics.pending, (state) => {
                state.statsLoading = true;
            })
            .addCase(fetchStatistics.fulfilled, (state, {payload}) => {
                state.statsLoading = false;
                state.stats = payload;
            })
    }
});

export const {setFromDate, setToDate} = statisticsSlice.actions

export default statisticsSlice.reducer;
