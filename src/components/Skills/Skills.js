import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

const Skills = () => {
  const classes = useStyles();

  const Line = () => <div className={classes.line} />;
  return (
    <>
      <Container className={classes.container}>
        <Typography variant='h3' gutterBottom className={classes.title}>
          Relevant skills
        </Typography>

        <Grid
          className={classes.grid}
          container
          direction='row'
          alignItems='flex-start'
          alignContent='center'
          justify='space-around'
        >
          <Grid
            className={classes.parent}
            container
            item
            xs={12}
            sm={6}
            md={4}
            alignItems='center'
            alignContent='center'
            justify='center'
          >
            <div className={classes.paper}>
              <Typography variant='h4' gutterBottom>
                Front-End
              </Typography>
              <div className={classes.content}>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    React.js / Redux
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    CSS / Sass
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Bootstrap / Reactstrap
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Responsive Design
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Material UI
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Styled Components
                  </Typography>
                </Grid>
              </div>
            </div>
          </Grid>

          <Grid
            className={classes.parent}
            container
            item
            xs={12}
            sm={6}
            md={4}
            alignItems='center'
            alignContent='center'
            justify='center'
          >
            <div className={classes.paper}>
              <Typography variant='h4' gutterBottom>
                Back-End
              </Typography>
              <div className={classes.content}>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Node.js
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Express.js
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    MongoDB
                  </Typography>
                </Grid>
              </div>
            </div>
          </Grid>

          <Grid
            className={classes.parent}
            container
            item
            xs={12}
            sm={6}
            md={4}
            alignItems='center'
            alignContent='center'
            justify='center'
          >
            <div className={classes.paper}>
              <Typography variant='h4' gutterBottom>
                Others
              </Typography>
              <div className={classes.content}>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Typescript
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Git / GitHub
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Testing
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    Terminal
                  </Typography>
                  <Line />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle} variant='subtitle1'>
                    ESLint
                  </Typography>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Skills;
