import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 10vh)",
  },
  button: {
    marginTop: "3rem",
    width: "10rem",
  },
}));
