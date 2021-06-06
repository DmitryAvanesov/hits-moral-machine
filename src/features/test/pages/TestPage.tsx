import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectDilemmas, selectTestLoading } from "../store/testSelects";
import { fetchTest } from "../store/testSlice";

export const TestPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const testLoading = useAppSelector(selectTestLoading);
  const dilemmas = useAppSelector(selectDilemmas);

  useEffect(() => {
    dispatch(fetchTest());
  }, []);

  useEffect(() => {
    console.log(dilemmas);
  }, [dilemmas]);

  return (
    <div>
      {testLoading ? <div>Loading...</div> : <div>{dilemmas[0].id}</div>}
    </div>
  );
};
