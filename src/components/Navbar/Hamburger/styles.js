import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navIcon: {
    width: "60px",
    height: "45px",
    position: "fixed",
    right: "3%",
    top: "3%",
    "-webkit-transform": "rotate(0deg)",
    "-moz-transform": "rotate(0deg)",
    "-o-transform": "rotate(0deg)",
    transform: "rotate(0deg)",
    "-webkit-transition": ".5s ease-in-out",
    "-moz-transition": ".5s ease-in-out",
    "-o-transition": ".5s ease-in-out",
    transition: ".5s ease-in-out",
    cursor: "pointer",

    "& span": {
      display: "block",
      position: "absolute",
      height: "9px",
      width: "50%",
      background: "#f3f3f3",
      opacity: "1",
      "-webkit-transform": "rotate(0deg)",
      "-moz-transform": "rotate(0deg)",
      "-o-transform": "rotate(0deg)",
      transform: "rotate(0deg)",
      "-webkit-transition": ".25s ease-in-out",
      "-moz-transition": ".25s ease-in-out",
      "-o-transition": ".25s ease-in-out",
      transition: ".25s ease-in-out",

      "&:nth-child(even)": {
        left: "50%",
        borderRadius: "0 9px 9px 0",
      },
      "&:nth-child(odd)": {
        left: "0px",
        borderRadius: "9px 0 0 9px",
      },
      "&:nth-child(1)": {
        top: "0px",
      },
      "&:nth-child(2)": {
        top: "0px",
      },
      "&:nth-child(3)": {
        top: "18px",
      },
      "&:nth-child(4)": {
        top: "18px",
      },
      "&:nth-child(5)": {
        top: "36px",
      },
      "&:nth-child(6)": {
        top: "36px",
      },
    },

    [theme.breakpoints.up("xs")]: {
      transform: "scale(0.6)",
      right: "2%",
      top: "2%",
    },
    [theme.breakpoints.up("sm")]: {
      transform: "scale(0.8)",
      right: "3%",
      top: "3%",
    },
    [theme.breakpoints.up("md")]: {
      transform: "scale(1)",
      right: "4%",
      top: "4%",
    },
  },

  open: {
    "& span": {
      "&:nth-child(1)": {
        "-webkit-transform": "rotate(45deg)",
        "-moz-transform": "rotate(45deg)",
        "-o-transform": "rotate(45deg)",
        transform: "rotate(45deg)",
        left: "5px",
        top: "7px",
      },
      "&:nth-child(2)": {
        "-webkit-transform": "rotate(-45deg)",
        "-moz-transform": "rotate(-45deg)",
        "-o-transform": "rotate(-45deg)",
        transform: "rotate(-45deg)",
        left: "calc(50% - 5px)",
        top: "7px",
      },

      "&:nth-child(3)": {
        left: "-50%",
        opacity: "0",
      },
      "&:nth-child(4)": {
        left: "100%",
        opacity: "0",
      },
      "&:nth-child(5)": {
        "-webkit-transform": "rotate(-45deg)",
        "-moz-transform": "rotate(-45deg)",
        "-o-transform": "rotate(-45deg)",
        transform: "rotate(-45deg)",
        left: "5px",
        top: "29px",
      },
      "&:nth-child(6)": {
        "-webkit-transform": "rotate(45deg)",
        "-moz-transform": "rotate(45deg)",
        "-o-transform": "rotate(45deg)",
        transform: "rotate(45deg)",
        left: "calc(50% - 5px)",
        top: "29px",
      },
    },
  },
}));
