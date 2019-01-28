import React from "react";

import classes from "./RollControl.css";

const rollControl = props => (
  <div className={classes.RollControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button
      className={classes.More}
      onClick={props.added}
      disabled={!props.disabled}
    >
      More
    </button>
  </div>
);

export default rollControl;
