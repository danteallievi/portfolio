import { Container, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} align="center">
        <Typography variant="h2" gutterBottom>
          HI THERE. IT'S DANTE ALLIEVI
        </Typography>
        <Typography variant="subtitle1">
          I'M A WEB DESIGNER & DEVELOPER CURRENTLY BASED IN HANNOVER GERMANY.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          HIT ME UP AND LET'S WORK TOGETHER
        </Typography>

        <Button
          className={classes.button}
          color="default"
          variant="contained"
          disableElevation
          size="large"
        >
          PORTFOLIO
        </Button>
      </Container>
    </>
  );
};

export default About;