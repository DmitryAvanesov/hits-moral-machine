import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { testApi } from "../api/testApi";
import { DilemmaBlock } from "../components/Dilemma";
import { SolutionCard } from "../components/SolutionCard";
import { Solution } from "../interfaces/solution";
import {
  selectDilemmas,
  selectSolutions,
  selectTestLoading,
} from "../store/testSelects";
import { fetchTest, setImage } from "../store/testSlice";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: "75%",
    padding: "64px 0",
    ["@media (max-width: 992px)"]: {
      width: "90%",
      padding: "32px 0",
    },
  },
  solutions: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

export const TestPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const testLoading = useAppSelector(selectTestLoading);
  const dilemmas = useAppSelector(selectDilemmas);
  const solutions = useAppSelector(selectSolutions);

  const [currentDilemma, setCurrentDilemma] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const solutionError: Solution = {
    id: "",
    dilemmaId: "",
    text: "Решение дилеммы не найдено",
    rate: 0,
  };

  useEffect(() => {
    dispatch(fetchTest());
  }, []);

  useEffect(() => {
    const fetchSolutionImages = async () => {
      for (const solution of solutions) {
        if (!solution.image) {
          const image = await testApi.fetchSolutionImage(solution.id);
          dispatch(setImage({ ...solution, image }));
        }
      }
    };

    fetchSolutionImages();
  }, [solutions.every((solution) => solution.image)]);

  useEffect(() => {
    const pushAnswers = async () => {
      const response = await testApi.pushAnswers(answers);

      if (!response) {
        alert(
          "Возникла ошибка при отправке ответов. Пожалуйста, пройдите тест заново."
        );
      }
    };

    if (currentDilemma && currentDilemma === dilemmas.length) {
      pushAnswers();
    }
  }, [currentDilemma]);

  const handleSolutionCardClick = (solutionId: string) => {
    setAnswers([...answers, solutionId]);
    setCurrentDilemma(currentDilemma + 1);
  };

  return (
    <div className={classes.root}>
      {testLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <DilemmaBlock
            dilemmas={dilemmas}
            currentDilemma={currentDilemma}
          ></DilemmaBlock>
          {currentDilemma < dilemmas.length ? (
            <div className={classes.solutions}>
              <SolutionCard
                solution={
                  solutions.find(
                    (solution) =>
                      solution.dilemmaId === dilemmas[currentDilemma].id
                  ) || solutionError
                }
                handleClick={handleSolutionCardClick}
              />
              <SolutionCard
                solution={
                  [...solutions]
                    .reverse()
                    .find(
                      (solution) =>
                        solution.dilemmaId === dilemmas[currentDilemma].id
                    ) || solutionError
                }
                handleClick={handleSolutionCardClick}
              />
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};
