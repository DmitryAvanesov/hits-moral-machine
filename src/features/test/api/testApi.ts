import { Test } from "../interfaces/test";

export const testApi = {
  async fetchTest(): Promise<Test> {
    const test = await fetch(`${process.env.REACT_APP_API}/test`, {
      method: "GET",
    });
    return test.json();
  },
};
