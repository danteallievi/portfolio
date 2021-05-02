import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 10vh)",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },
  line: {
    width: "100%",
    backgroundColor: "#525252",
    height: "1px",
  },
  title: {
    paddingTop: "6rem",

    [theme.breakpoints.down("md")]: {
      paddingTop: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "3rem",
      marginBottom: "2rem",
    },
  },
  grid: {
    flexGrow: 1,
  },

  parent: {},

  paper: {
    marginBottom: "1rem",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0px 0px 20px 0px #000000",
    backgroundColor: "#333333",
    width: "20vw",

    [theme.breakpoints.down("sm")]: {
      width: "35vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "55vw",
      padding: "0.5rem",
    },
  },
  content: {
    textAlign: "left",
  },

  subtitle: {
    fontSize: 17,
  },
}));
