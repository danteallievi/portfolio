import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: "1rem",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#343a41",
  },
  menuButtons: {
    fontWeight: "900",
    fontSize: "2rem",
    width: "2rem",
    padding: "1rem 15rem",
    backgroundColor: "#31363b",

    [theme.breakpoints.down("xs")]: {
      padding: "1rem 7rem",
    },

    "&:hover": {
      backgroundColor: "#0b131c",
    },
  },
}));
