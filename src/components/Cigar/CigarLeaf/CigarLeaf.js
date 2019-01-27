import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./CigarLeaf.css";

class CigarLeaf extends Component {
  render() {
    let leaf = null;

    switch (this.props.type) {
      case "aroma":
        leaf = <div className={classes.Aroma} />;
        break;
      case "cigar-binder":
        leaf = <div className={classes.CigarBinder} />;
        break;
      case "filler":
        leaf = <div className={classes.Filler} />;
        break;
      case "cigar-wrapper":
        leaf = <div className={classes.CigarWrapper} />;
        break;
      default:
        leaf = null;
    }

    return leaf;
  }
}

CigarLeaf.propTypes = {
  type: PropTypes.string.isRequired
};

export default CigarLeaf;
