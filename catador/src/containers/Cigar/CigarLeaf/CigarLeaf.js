import React from "react";

import classes from "./cigarLeaf.css";

const cigarLeaf = props => {
  let leaf = null;

  switch (props.type) {
    case "cigar-wrapper":
      leaf = <div className={classes.CigarWrapper} />;
      break;
    case "cigar-binder":
      leaf = (
        <div className={classes.CigarBinder}>
          <div />
        </div>
      );
      break;
    case "filler":
      leaf = <div className={classes.Filler} />;
      break;
    case "aroma":
      leaf = <div className={classes.Aroma} />;
      break;
    default:
      leaf = null;
  }

  return leaf;
};

export default cigarLeaf;
