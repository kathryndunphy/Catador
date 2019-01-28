import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Catador Roller
    </NavigationItem>
    <NavigationItem link="/">Add to my Humidor</NavigationItem>
  </ul>
);

export default navigationItems;
