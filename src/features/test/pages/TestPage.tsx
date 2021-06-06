import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { SolutionCard } from "../components/SolutionCard";
import { Dilemma } from "../interfaces/dilemma";
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
    width: "90%",
    padding: "64px 0",
    display: "flex",
    justifyContent: "space-between",
  },
});

export const TestPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const testLoading = useAppSelector(selectTestLoading);
  const dilemmas = useAppSelector(selectDilemmas);
  const solutions = useAppSelector(selectSolutions);

  const [currentDilemma, setCurrentDilemma] = useState<Dilemma>();

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
    setCurrentDilemma(dilemmas[0]);
  }, [dilemmas]);

  return (
    <div className={classes.root}>
      {testLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <SolutionCard
            solution={
              solutions.find(
                (solution) => solution.dilemmaId === currentDilemma?.id
              ) || solutionError
            }
          />
          <SolutionCard
            solution={
              [...solutions]
                .reverse()
                .find(
                  (solution) => solution.dilemmaId === currentDilemma?.id
                ) || solutionError
            }
          />
        </>
      )}
    </div>
  );
};
