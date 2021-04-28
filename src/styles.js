import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#f3f3f3",
    },
  },
});
export default theme = responsiveFontSizes(theme);


