import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

import Project from "./Proyect/Project";

import eCommerceImg from "../../images/e-commerce.png";
import breakingBadImg from "../../images/BreakingBad.jpg";
import expenseTrackerImg from "../../images/expenseTracker.jpg";

const eCommerceText =
  "For this project I've worked in React.js, with things like Stripe, to make card transactions, and build my first application e-commerce fully functional using Commerce.js";
const breakingBadText =
  "For this project I've worked in React.js, with a Breaking Bad API, to create a small app with a simple pagination, to show and filter the character info.";
const expenseTrackerText =
  "This was one of my first apps. Built in React.js to learn the correct use of React-Hooks";

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="body1" className={classes.gris} paragraph>
        {"//"} These are my favorite projects I've worked on. Have a look around
        and make sure to hit me up!
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
          technologies={["REACT.JS", "MATERIAL-UI", "STRIPE.JS", "COMMERCE.JS"]}
          text={eCommerceText}
          image={eCommerceImg}
        />

        <Project
          title="BREAKING BAD API"
          technologies={["REACT.JS", "AXIOS", "BOOTSTRAP"]}
          text={breakingBadText}
          image={breakingBadImg}
        />

        <Project
          title="EXPENSE TRACKER"
          technologies={["REACT.JS", "REACT-HOOKS"]}
          text={expenseTrackerText}
          image={expenseTrackerImg}
        />
      </Grid>
    </Container>
  );
};

export default Portfolio;
