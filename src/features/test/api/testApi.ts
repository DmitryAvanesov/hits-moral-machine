import { Test } from "../interfaces/test";

export const testApi = {
  async fetchTest(): Promise<Test> {
    const test = await fetch(`${process.env.REACT_APP_API}/test`, {
      method: "GET",
    });

    return test.json();
  },
  async fetchSolutionImage(id: string): Promise<string> {
    const solutionImage = await fetch(
      `${process.env.REACT_APP_API}/solution-image/${id}`,
      {
        method: "GET",
      }
    );

    const blob = await solutionImage.blob();
    const uri = URL.createObjectURL(blob);

    return uri;
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
