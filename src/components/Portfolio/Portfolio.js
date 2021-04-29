import { useState } from "react";

import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

import Project from "./Proyect/Project";

import project from "../../images/e-commerce.png";
import project1 from "../../images/BreakingBad.jpg";
import project2 from "../../images/expenseTracker.jpg";

const tech = ["react", "vue", "asd"];
const tech1 = ["LKAAKAKA", "ASDADGSFD", "RIKI"];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="body1" className={classes.gris} paragraph>
        These are my favorite projects I've worked on. Have a look around and
        make sure to hit me up!
      </Typography>

      <Grid
        container
        justify="space-around"
        alignContent="center"
        alignItems="center"
        className={classes.grid}
        direction="row"
        spacing={4}
      >
        <Project
          title="E-COMMERCE"
          technologies={tech}
          text="asdasdasdasdasdasdasdasdasd"
          image={project}
        />
        <Project
          title="TUMAMA"
          technologies={tech1}
          text="bbbbbbbbbbb"
          image={project1}
        />
      </Grid>
    </Container>
  );
};

export default Portfolio;
