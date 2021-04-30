import useStyles from "./styles";

import { Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.root}>
        <Typography variant="h6">
          {"\u00a9"} 2021 Dante Allievi. All Rights Reserved.
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
