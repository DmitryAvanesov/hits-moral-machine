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
    width: "350px",
    cursor: "pointer",
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
        image="https://image.freepik.com/free-photo/doctor-with-syringe-injection-in-hospital-professional-medicine-health-clinic-practitioner_92397-789.jpg"
        title={props.solution.text}
      />
      <CardContent>
        <Typography variant="body1">
          {props.solution?.text}: Нужно спасти женщину, так как она уже является
          членом общества, у которого есть социальные связи, близкие люди.
          Общество получит большую пользу от ее спасения.
        </Typography>
      </CardContent>
    </Card>
  );
};
