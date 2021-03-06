import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh - 10vh)',
  },

  title: {
    paddingTop: '6rem',

    [theme.breakpoints.down('md')]: {
      paddingTop: '4rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '3rem',
    },
  },
  gris: {
    color: '#ced4da',
    fontSize: 18,
  },
  grid: {
    flexGrow: 1,
    marginBottom: '1rem',
  },
}));
