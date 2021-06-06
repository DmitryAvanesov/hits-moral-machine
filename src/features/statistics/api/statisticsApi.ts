import {StatisticsElement} from "../interfaces/statisticsElement";

export const statisticsApi = {
    fetchStatistics(): Promise<StatisticsElement[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {date: '10.10.2020', value: 0.5},
                    {date: '11.10.2020', value: 0.55},
                    {date: '12.10.2020', value: 0.6},
                    {date: '13.10.2020', value: 0.53},
                    {date: '14.10.2020', value: 0.42}
                ]);
            }, 1500)
        });
    }
}
