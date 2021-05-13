import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

import Project from './Proyect/Project';

import memoriesImg from '../../images/memories.jpg';
import eCommerceImg from '../../images/e-commerce.png';
import expenseTrackerImg from '../../images/expenseTracker.jpg';
import authappImg from '../../images/authapp.jpg';
import breakingBadImg from '../../images/BreakingBad.jpg';

const memories = {
  text: `For this project I implemented the MERN-STACK for the first time, taking care of the APP from start to finish. Adding authentication, to allow the user to register and log in with email, or register using their google account, to like, create or delete a post`,
  demo: `https://mern-app-memo.netlify.app/`,
  code: `https://github.com/danteallievi/mern-memories`,
};
const eCommerce = {
  text: `For this project I've worked in React.js, with things like Stripe, to make card transactions, and build my first application e-commerce fully functional using Commerce.js`,
  demo: `https://tech-e-commerce.netlify.app/`,
  code: `https://github.com/danteallievi/e-commerce`,
};
const authapp = {
  text: `For this project, built in React.js, I used the firebase service. To practice mail authentication on the front side.`,
  demo: `https://auth-app-demo.netlify.app/`,
  code: `https://github.com/danteallievi/firebase-authentication`,
};
const expenseTracker = {
  text: `This was one of my first apps. Built in React.js to learn the correct use of React-Hooks`,
  demo: `https://danteallievi.github.io/expense-tracker/`,
  code: `https://github.com/danteallievi/expense-tracker`,
};
const breakingBad = {
  text: `For this project I've worked in React.js, with a Breaking Bad API, to create a small app with a simple pagination, to show and filter the character info.`,
  demo: `https://danteallievi.github.io/breakingbad/`,
  code: `https://github.com/danteallievi/breakingbad`,
};

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant='h3' gutterBottom>
        Portfolio
      </Typography>
      <Typography variant='body1' className={classes.gris} paragraph>
        {'//'} These are my favorite projects I've worked on. Have a look around
        and make sure to hit me up!
      </Typography>

      <Grid
        container
        justify='space-around'
        alignContent='center'
        alignItems='center'
        className={classes.grid}
        direction='row'
      >
        <Project
          title='MEMORIES MERN-STACK'
          technologies={[
            'REACT.JS',
            'REDUX',
            'NODE.JS',
            'EXPRESS',
            'MONGODB ATLAS',
            'MONGOOSE',
            'OAUTH GOOGLE',
            'JWT',
            'MATERIAL-UI',
          ]}
          text={memories.text}
          image={memoriesImg}
          demoLink={memories.demo}
          codeLink={memories.code}
        />

        <Project
          title='E-COMMERCE'
          technologies={['REACT.JS', 'MATERIAL-UI', 'STRIPE.JS', 'COMMERCE.JS']}
          text={eCommerce.text}
          image={eCommerceImg}
          demoLink={eCommerce.demo}
          codeLink={eCommerce.code}
        />

        <Project
          title='AUTHENTICATION APP'
          technologies={['REACT.JS', 'REACT-HOOKS', 'FIREBASE', 'BOOTSTRAP']}
          text={authapp.text}
          image={authappImg}
          demoLink={authapp.demo}
          codeLink={authapp.code}
        />

        <Project
          title='EXPENSE TRACKER'
          technologies={['REACT.JS', 'REACT-HOOKS']}
          text={expenseTracker.text}
          image={expenseTrackerImg}
          demoLink={expenseTracker.demo}
          codeLink={expenseTracker.code}
        />

        <Project
          title='BREAKING BAD API'
          technologies={['REACT.JS', 'AXIOS', 'BOOTSTRAP']}
          text={breakingBad.text}
          image={breakingBadImg}
          demoLink={breakingBad.demo}
          codeLink={breakingBad.code}
        />
      </Grid>
    </Container>
  );
};

export default Portfolio;
