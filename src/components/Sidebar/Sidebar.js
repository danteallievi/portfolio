import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

import useStyle from './styles';

const Sidebar = () => {
  const classes = useStyle();
  return (
    <>
      <aside className={classes.sidebar}>
        <a href='https://www.linkedin.com/in/dante-allievi-3907291b2'>
          <span className={classes.text}>Linkedin</span>
          <i>
            <LinkedInIcon className={classes.icon} />
          </i>
        </a>

        <a href='https://github.com/danteallievi'>
          <span className={classes.text}>Github</span>
          <i>
            <GitHubIcon className={classes.icon} />
          </i>
        </a>

        <a href='mailto:danteallievi@gmail.com'>
          <span className={classes.text}>Email</span>
          <i>
            <MailIcon className={classes.icon} />
          </i>
        </a>
        <a href='https://drive.google.com/file/d/1Uj0k86oNOhqibrlaj34TUl0uBhmYnqYX/view?usp=sharing'>
          <span className={classes.text}>Resume</span>
          <i>
            <PermContactCalendarIcon className={classes.icon} />
          </i>
        </a>
      </aside>
    </>
  );
};

export default Sidebar;
