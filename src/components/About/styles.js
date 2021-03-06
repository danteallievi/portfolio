import { makeStyles } from '@material-ui/core/styles';
import { HowToVoteRounded } from '@material-ui/icons';

export default makeStyles((theme) => ({
  container: {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 10vh)',
  },
  button: {
    marginTop: '3rem',
    width: '10rem',
    cursor: 'pointer',
    transition: '.25s ease-in-out',

    '&:hover': {
      backgroundColor: '#b0b0b0',
      cursor: 'pointer',
    },
  },
  subtitle: {
    fontSize: 18,
  },
}));
