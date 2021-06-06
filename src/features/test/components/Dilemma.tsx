import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Dilemma } from "../interfaces/dilemma";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: "32px",
  },
  progressBlock: {
    marginRight: "24px",
  },
});

export const DilemmaBlock = (props: {
  dilemmas: Dilemma[];
  currentDilemma: number;
}): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        className={classes.progressBlock}
        position="relative"
        display="inline-flex"
      >
        <CircularProgress
          variant="determinate"
          value={Math.floor(
            (props.currentDilemma / props.dilemmas.length) * 100
          )}
          size={75}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6">
            {props.currentDilemma} / {props.dilemmas.length}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6">
        {props.dilemmas[props.currentDilemma]?.text ||
          "Благодарим за прохождение теста"}
      </Typography>
    </div>
  );
};
