import { Test } from "../interfaces/test";

export const testApi = {
  async fetchTest(): Promise<Test> {
    const test = await fetch(`${process.env.REACT_APP_API}/test`, {
      method: "GET",
    });

    return test.json();
  },
  async pushAnswers(answers: string[]): Promise<boolean> {
    const res = await fetch(`${process.env.REACT_APP_API}/answers`, {
      method: "POST",
      body: JSON.stringify(answers),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.ok;
  },
};
