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
    height: "150px",
  },
});

export const SolutionCard = (props: { solution: Solution }): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="http://m.colta.ru/storage/post/1349/detailed_picture.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body1">
          {props.solution?.text} Нужно спасти женщину, так как она уже является
          членом общества, у которого есть социальные связи, близкие люди.
          Общество получит большую пользу от ее спасения.
        </Typography>
      </CardContent>
    </Card>
  );
};
