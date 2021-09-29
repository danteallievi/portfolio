import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {},
        '*::-webkit-scrollbar': {
          width: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
          'background-color': '#8a8a8a',
          outline: '2px solid #fff',
          'outline-offset': '-2px',
          border: '0.1px solid #b7b7b7',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          'background-color': '#5c5c5c',
        },
        '*::-webkit-scrollbar-track-piece': {
          'background-color': '#fefefe',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#f3f3f3',
    },
  },
});
export default theme = responsiveFontSizes(theme);
