import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Solution } from "../interfaces/solution";

const useStyles = makeStyles({
  root: {
    width: "40%",
    height: "fit-content",
    cursor: "pointer",
    marginBottom: "24px",
    transition: "transform 1s",
    "&:hover": {
      transform: "scale(1.025)",
    },
    ["@media (max-width: 550px)"]: {
      width: "100%",
    },
  },
  media: {
    height: "200px",
  },
});

export const SolutionCard = (props: {
  solution: Solution;
  handleClick: (solutionId: string) => void;
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={() => {
        props.handleClick(props.solution.id);
      }}
    >
      <CardMedia
        className={classes.media}
        image={props.solution.image}
        title={props.solution.text}
      />
      <CardContent>
        <Typography variant="body1">{props.solution?.text}</Typography>
      </CardContent>
    </Card>
  );
};
