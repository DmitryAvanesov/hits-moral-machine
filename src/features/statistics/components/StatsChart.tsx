import React, { FC, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { StatisticsElement } from "../interfaces/statisticsElement";

interface StatsChartState {
  data: StatisticsElement[];
}

export const StatsChart: FC<StatsChartState> = (props) => {
  const initialChartData: ChartData = {
    labels: [],
    datasets: [
      {
        label: "Rates",
        data: [],
      },
    ],
  };

  const [chartData, setChartData] = useState<ChartData>(initialChartData);
  const options: ChartOptions = {
    scales: {
      y: {
        suggestedMin: -1,
        suggestedMax: 1,
      },
    },
  };

  useEffect(() => {
    transformChartData();
  }, [props.data]);

  const transformChartData = () => {
    const tempChartData = { ...initialChartData };
    props.data.forEach((el) => {
      tempChartData.labels?.push(el.date);
      tempChartData.datasets[0].data.push(el.rate);
    });
    setChartData(tempChartData);
  };

  return (
    <div>
      <Line data={chartData} type={Line} options={options} />
    </div>
  );
};
