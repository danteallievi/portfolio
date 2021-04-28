import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <div className={classes.navIcon + (isOpen ? ` ${classes.open}` : "")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Navbar;
