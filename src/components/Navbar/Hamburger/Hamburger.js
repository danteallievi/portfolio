import useStyles from "./styles";

const Hamburger = ({ handleOpenIcon, isIconOpen }) => {
  const classes = useStyles();

  return (
    <div
      onClick={handleOpenIcon}
      className={classes.navIcon + (isIconOpen ? ` ${classes.open}` : "")}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
