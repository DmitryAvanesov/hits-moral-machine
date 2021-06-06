import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {fetchStatistics} from "../../store/statisticsSlice";
import {selectStatisticsLoading} from "../../store/statisticsSelects";

export const StatisticsPage = () => {

    const dispatch = useAppDispatch();
    const statsLoading = useAppSelector(selectStatisticsLoading);

    useEffect(() => {
        dispatch(fetchStatistics());
    }, [])

    return (
        <div>
            {statsLoading
                ? <div>Loading...</div>
                : <div>Stats</div>}
        </div>
    )
}
