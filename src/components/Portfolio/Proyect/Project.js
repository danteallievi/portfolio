import { useState } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";

import { Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Project = ({ title, text, technologies, image }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        item
        xs={8}
        md={4}
        xl={3}
        className={classes.box}
      >
        <img src={image} alt="Proyect" width="100%" className={classes.img} />
        <Button
          variant="contained"
          className={classes.projectButtons}
          onClick={handleOpen}
        >
          View project
        </Button>

        <ModalWindow
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          title={title}
          technologies={technologies}
          text={text}
        />
      </Grid>
    </>
  );
};

export default Project;
