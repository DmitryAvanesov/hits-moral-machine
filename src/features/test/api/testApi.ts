import { Answer } from "../interfaces/answer";
import { Test } from "../interfaces/test";

export const testApi = {
  async fetchTest(): Promise<Test> {
    const test = await fetch(`${process.env.REACT_APP_API}/test`, {
      method: "GET",
    });

    return test.json();
  },
  async pushAnswers(answers: Answer[]): Promise<any> {
    const res = await fetch(`${process.env.REACT_APP_API}/test`, {
      method: "POST",
      body: JSON.stringify(answers),
    });

    return res.json();
  },
};
