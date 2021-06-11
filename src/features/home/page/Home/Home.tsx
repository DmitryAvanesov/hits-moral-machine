import React from "react";
import { Link, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export const Home = (): JSX.Element => {
  const history = useHistory();

  const goToTest = () => {
    history.push("/test");
  };

  const goToStatistics = () => {
    history.push("/statistics");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 25px" }}>
      <Typography
        style={{ textAlign: "center", marginTop: "16px" }}
        variant="h4"
        component="h4"
      >
        Движение России к гуманистической этике
      </Typography>

      <section style={{ marginTop: "32px" }}>
        <Typography variant="body1" component="div">
          Этот сайт создан с целью измерения движения российского общества к
          принципам гуманистической этики. Измерения осуществляются посредством
          прохождения респондентами теста, в котором предлагается выбрать один
          из двух предложенных вариантов, наиболее точно отражающий отношение к
          приведённой ситуации.
        </Typography>
      </section>

      <section style={{ marginTop: "16px" }}>
        <Typography variant="body1" component="div">
          Предлагаем вам{" "}
          <Link onClick={goToTest} style={{ cursor: "pointer" }}>
            пройти тест
          </Link>
        </Typography>
        <Typography variant="body1" component="div">
          А также можете{" "}
          <Link onClick={goToStatistics} style={{ cursor: "pointer" }}>
            посмотреть статистику
          </Link>{" "}
          за время работы сайта
        </Typography>
      </section>
    </div>
  );
};
