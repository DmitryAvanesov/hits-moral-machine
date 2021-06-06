import {StatisticsElement} from "../interfaces/statisticsElement";

export const statisticsApi = {
    fetchStatistics(): Promise<StatisticsElement[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {date: '06/05/2021', value: 0.5},
                    {date: '06/06/2021', value: 0.55},
                    {date: '06/07/2021', value: 0.6},
                    {date: '06/08/2021', value: 0.53},
                    {date: '06/09/2021', value: 0.42}
                ]);
            }, 1500)
        });
    }
}
