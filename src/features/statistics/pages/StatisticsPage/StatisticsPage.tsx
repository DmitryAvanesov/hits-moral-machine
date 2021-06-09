import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  fetchStatistics,
  setFromDate,
  setToDate,
} from "../../store/statisticsSlice";
import {
  selectFromDate,
  selectStatisticsLoading,
  selectStats,
  selectToDate,
} from "../../store/statisticsSelects";
import { StatsChart } from "../../components/StatsChart";
import { CircularProgress, Typography } from "@material-ui/core";
import "./StatisticsPage.scss";
import { DateFilter } from "../../components/DateFilter/DateFilter";
import { StatisticsElement } from "../../interfaces/statisticsElement";

export const StatisticsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const statsLoading = useAppSelector(selectStatisticsLoading);
  const stats: StatisticsElement[] = useAppSelector(selectStats);

  const fromDate = useAppSelector(selectFromDate);
  const toDate = useAppSelector(selectToDate);

  const [filteredStats, setFilteredStats] = useState<StatisticsElement[]>([]);

  const handleFromDate = (date: Date | null) => {
    if (date) {
      dispatch(setFromDate(date));
    }
  };
  const handleToDate = (date: Date | null) => {
    if (date) {
      dispatch(setToDate(date));
    }
  };

  const filterStats = () => {
    const tempStats = stats.filter(
      (el) => new Date(el.date) >= fromDate && new Date(el.date) <= toDate
    );
    console.log(stats.map((el) => ({ ...el, date: new Date(el.date) })));
    setFilteredStats(tempStats);
  };

  useEffect(() => {
    dispatch(fetchStatistics());
  }, []);

  useEffect(() => {
    filterStats();
  }, [stats]);

  useEffect(() => {
    filterStats();
  }, [fromDate, toDate]);

  return (
    <div className="container">
      <section className="title">
        <Typography variant="h2" component="h2">
          Статистика
        </Typography>
      </section>
      <section className="date-range">
        <DateFilter
          fromDate={fromDate}
          toDate={toDate}
          handleFromDate={handleFromDate}
          handleToDate={handleToDate}
        />
      </section>
      <section className="stats-container">
        {statsLoading ? (
          <CircularProgress />
        ) : (
          <StatsChart data={filteredStats} />
        )}
      </section>
    </div>
  );
};
