import {
  Button,
  Grid,
  Modal,
  Backdrop,
  Fade,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";

const ModalWindow = ({
  open,
  handleClose,
  title,
  technologies,
  text,
  demoLink,
  codeLink,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.content}>
            <button onClick={handleClose} className={classes.close}>
              {"\u00D7"}
            </button>

            <Typography
              variant="subtitle2"
              component="h1"
              className={classes.sectionTitle}
            >
              PROJECT
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.projectTitle}
            >
              {title}
            </Typography>

            <Grid container spacing={1} className={classes.technologyContainer}>
              {technologies.map((tech) => (
                <Grid item key={tech}>
                  <Typography
                    variant="subtitle2"
                    component="h3"
                    className={classes.technology}
                  >
                    {tech}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Typography
              gutterBottom
              variant="subtitle2"
              component="h4"
              className={classes.sectionTitle}
            >
              ABOUT
            </Typography>

            <Typography component="h5" variant="body1" className={classes.text}>
              {text}
            </Typography>

            <div className={classes.modalButtonsContainer}>
              <a href={demoLink}>
                <Button
                  startIcon={<VisibilityIcon />}
                  variant="contained"
                  className={classes.modalButtons}
                >
                  DEMO
                </Button>
              </a>
              <a href={codeLink}>
                <Button
                  startIcon={<CodeIcon />}
                  variant="contained"
                  className={classes.modalButtons}
                >
                  CODE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
