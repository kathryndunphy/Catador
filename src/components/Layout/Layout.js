import React from "react";

import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>

    <div>
      Toolbar, SideDrawer, Backdrop (these are placeholder names for components
      to create) 
      <form action="http://www.google.com/search" method="get">
    <input type="text" name="q"/>
    <input type="submit" value="search" />
</form>
    </div>

    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
