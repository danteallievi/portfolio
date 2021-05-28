import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  box: {
    width: '100%',
    height: '100%',
    position: 'relative',
    margin: '2rem 1rem 0 1rem',
    transition: 'all 0.5s',
    // backgroundColor: 'red',
    // borderRadius: '2rem',

    '& button': {
      top: '70%',
      backgroundColor: '#f3f3f3',
      opacity: '0',
    },
    '&:hover': {
      '& button': {
        transition: 'all 0.5s',
        opacity: '1',
        cursor: 'pointer',
      },
      '& img': {
        opacity: '0.5',
      },
    },

    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem',
    },
  },
  img: {
    width: '125%',
    height: '100%',
    padding: '1rem',
    boxShadow: '0px 0px 20px 0px #000000',
    borderRadius: '2rem',

    [theme.breakpoints.down('sm')]: {
      width: '150%',
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '130%',
      height: '150%',
    },
  },
  projectButtons: {
    position: 'absolute',

    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
  },

  //
}));
