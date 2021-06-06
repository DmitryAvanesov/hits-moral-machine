import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { DilemmaBlock } from "../components/Dilemma";
import { SolutionCard } from "../components/SolutionCard";
import { Answer } from "../interfaces/answer";
import { Solution } from "../interfaces/solution";
import {
  selectDilemmas,
  selectSolutions,
  selectTestLoading,
} from "../store/testSelects";
import { fetchTest } from "../store/testSlice";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: "75%",
    padding: "64px 0",
  },
  solutions: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export const TestPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const testLoading = useAppSelector(selectTestLoading);
  const dilemmas = useAppSelector(selectDilemmas);
  const solutions = useAppSelector(selectSolutions);

  const [currentDilemma, setCurrentDilemma] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const solutionError: Solution = {
    id: "",
    dilemmaId: "",
    text: "Решение дилеммы не найдено",
    rate: 0,
  };

  useEffect(() => {
    dispatch(fetchTest());
  }, []);

  const handleSolutionCardClick = (solutionId: string) => {
    setAnswers([...answers, { id: "", solutionId, createDate: new Date() }]);
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
