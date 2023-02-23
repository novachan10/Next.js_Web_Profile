import React, { Fragment } from "react";
import Header from "../Header/Header";00000000000000000000000000

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
