import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

import project from "../../images/e-commerce.png";
import project1 from "../../images/BreakingBad.jpg";
import project2 from "../../images/expenseTracker.jpg";

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
        <Grid
          container
          justify="center"
          item
          xs={8}
          md={4}
          xl={3}
          className={classes.box}
        >
          <img
            src={project}
            alt="First proyect"
            width="100%"
            className={classes.img}
          />
          <Button variant="contained" className={classes.projectButtons}>
            View project
          </Button>
        </Grid>

        <Grid
          container
          justify="center"
          item
          xs={8}
          md={4}
          xl={3}
          className={classes.box}
        >
          <img
            src={project1}
            alt="First proyect"
            width="100%"
            className={classes.img}
          />
          <Button variant="contained" className={classes.projectButtons}>
            View project
          </Button>
        </Grid>

        <Grid
          container
          justify="center"
          item
          xs={8}
          md={4}
          xl={3}
          className={classes.box}
        >
          <img
            src={project2}
            alt="First proyect"
            width="100%"
            className={classes.img}
          />
          <Button variant="contained" className={classes.projectButtons}>
            View project
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
