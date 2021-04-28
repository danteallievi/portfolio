import { Navbar, Sidebar } from "../index";

import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
