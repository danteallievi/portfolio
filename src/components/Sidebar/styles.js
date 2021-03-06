import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidebar: {
    position: "fixed",
    top: "50%",
    WebkitTransform: "translateY(-50%)",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
    zIndex: "99",

    "& a": {
      transform: "translateX(-60%)",
      padding: "0 0.6rem 0 .4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "white",
      width: "7rem",
      height: "3.5rem",
      textAlign: "center",
      backgroundColor: "red",
      transition: "all .45s cubic-bezier(.175,.385,.32,1.2)",
      textDecoration: "none",
      fontSize: "1rem",

      "&:nth-child(1)": {
        backgroundColor: "#1c5d99",
      },
      "&:nth-child(2)": {
        backgroundColor: "#333",
      },
      "&:nth-child(3)": {
        backgroundColor: "#639fab",
      },
      "&:nth-child(4)": {
        backgroundColor: "#565f69",
      },

      [theme.breakpoints.down("md")]: {
        width: "6rem",
        height: "2.5rem",
        padding: "0 0.5rem 0 .2rem",
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("xs")]: {
        width: "5.7rem",
        height: "2rem",
        padding: "0 0.5rem 0 .1rem",
        fontSize: "0.8rem",
      },

      [theme.breakpoints.up("xl")]: {
        width: "10rem",
        height: "4rem",
        padding: "0 1rem 0 0.4rem",
        fontSize: "1.5rem",
      },
    },
    "& span": {
      position: "relative",
      visibility: "initial",
    },

    "& a:hover": {
      transform: "translateX(0%)",
    },
    [theme.breakpoints.down("xs")]: {
      top: "55%",
    },
  },
  icon: {
    display: "flex",
    alignSelf: "flex-end",
    fontSize: "1.8rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
}));
