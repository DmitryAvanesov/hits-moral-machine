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
      <section className="description">
        <Typography variant="body1" component="div">
          Данный график показывает данные, как в течение заданного промежутка времени изменялись ответы россиян на приведенные в тесте вопросы.
        </Typography>
        <br/>
        <Typography variant="body1" component="div">
          Каждый ответ имеет определенное значение Rate, которое определила команда разработчиков теста. Оно может быть от -1 до 1, где -1 - ответ, являющийся наиболее близким к понятию авторитарной этики, а 1 - наиболее близким к гуманистической этике.
        </Typography>
        <br/>
        <Typography variant="body1" component="div">
          Значение Rate для определенной даты подсчитыввается, как среднее арифмитическое всех ответов, данных за последние 5 дней.
        </Typography>
        <br/>
        <Typography variant="body1" component="div">
          Ниже можете выбрать диапазон дат, в котором вам будет удобно посмотреть статистику
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
