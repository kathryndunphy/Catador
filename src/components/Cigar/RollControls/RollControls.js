import React from "react";

import classes from "./RollControls.css";
import RollControl from "./RollControl/RollControl";

const controls = [
  { label: "Aroma", type: "aroma" },
  { label: "Binder", type: "cigar-binder" },
  { label: "Filler", type: "filler" },
  { label: "Wrapper", type: "cigar-wrapper" }
];

const rollControls = props => (
  <div className={classes.RollControls}>
    <p>
      Current Cigar Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <RollControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.leafAdded(ctrl.type)}
        removed={() => props.leafRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER CIGAR ROLL
    </button>
  </div>
);

export default rollControls;
