import React from "react";

import cigarLogo from "../../assets/images/cigar-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={cigarLogo} alt="CigarLogo" />
  </div>
);

export default logo;
