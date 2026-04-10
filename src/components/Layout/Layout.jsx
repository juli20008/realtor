import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main className="pt-20">{children}</main>
    </Fragment>
  );
};

export default Layout;
