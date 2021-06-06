import {StatisticsElement} from "../interfaces/statisticsElement";

export const statisticsApi = {
    async fetchStatistics(): Promise<StatisticsElement[]> {
        const statistics = await fetch(`${process.env.REACT_APP_API}/statistics`, {
            method: "GET",
        });
        return statistics.json();
    }
}
