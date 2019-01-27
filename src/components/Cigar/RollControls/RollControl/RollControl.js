import React from 'react';

import classes from './RollControl.css'

const rollControl = (props) => (
    <div className={classes.RollControl }>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default rollControl;