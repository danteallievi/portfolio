import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Modal, Backdrop, Fade } from "@material-ui/core";

import useStyles from "./styles";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = () => {
  const [isIconOpen, setIsIconOpen] = useState(false);
  const classes = useStyles();

  const handleOpenIcon = () => setIsIconOpen(!isIconOpen);

  return (
    <>
      <Hamburger isIconOpen={isIconOpen} handleOpenIcon={handleOpenIcon} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isIconOpen}
        onClose={handleOpenIcon}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isIconOpen}>
          <div className={classes.paper}>
            <Hamburger
              isIconOpen={isIconOpen}
              handleOpenIcon={handleOpenIcon}
            />
            <Button
              component={Link}
              to="/"
              onClick={handleOpenIcon}
              variant="outlined"
              className={classes.menuButtons}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/portfolio"
              onClick={handleOpenIcon}
              variant="outlined"
              className={classes.menuButtons}
            >
              Portfolio
            </Button>
            <Button
              component={Link}
              to="/skills"
              onClick={handleOpenIcon}
              variant="outlined"
              className={classes.menuButtons}
            >
              Skills
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Navbar;
