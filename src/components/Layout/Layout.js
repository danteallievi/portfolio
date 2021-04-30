import { Navbar, Sidebar, Footer } from "../index";

import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
