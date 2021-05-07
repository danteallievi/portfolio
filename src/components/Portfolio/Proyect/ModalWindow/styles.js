import { makeStyles } from '@material-ui/core/styles';

const gris = '#94a4b4';
export default makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      textDecoration: 'none',
    },
  },
  paper: {
    border: '2px solid #000',
    width: '50vw',
    height: '70vh',
    backgroundColor: '#343a41',
    boxShadow: theme.shadows[8],
    [theme.breakpoints.down('md')]: {
      width: '55vw',
      height: '70vh',
    },
    [theme.breakpoints.down('sm')]: {
      width: '65vw',
      height: '75vh',
    },
    [theme.breakpoints.down('xs')]: {
      width: '75vw',
      height: '80vh',
    },
  },

  content: {
    position: 'relative',
    padding: '0 2.5rem',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },

  close: {
    transition: 'all 0.2s ',
    color: '#fff',
    fontSize: '3rem',
    padding: 0,
    position: 'absolute',
    right: '3%',
    top: '1%',
    backgroundColor: '#343a41',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },
  },

  sectionTitle: {
    fontWeight: 500,
    color: gris,
    padding: '2.5rem 0 1rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0 0.5rem 0',
    },
  },

  projectTitle: {
    fontWeight: 900,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },

  technologyContainer: {
    marginLeft: '0.5rem',

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },

  technology: {
    border: '1.5px solid #22262a',
    padding: '0.3rem',
    fontWeight: 100,
    color: gris,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },

  text: {
    fontSize: '1.2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
      fontSize: '0.9rem',
    },
  },

  modalButtonsContainer: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    top: '90%',
    left: '50%',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
  },

  modalButtons: {
    margin: '0 2rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0.3rem',
    },
  },
}));
