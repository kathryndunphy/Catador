import React from 'react';

import classes from './RollControls.css';
import RollControl from './RollControl/RollControl';

const controls = [
    { label: 'Aroma', type: 'aroma'},
    { label: 'Binder', type: 'cigar-binder'},
    { label: 'Filler', type: 'filler'},
    { label: 'Wrapper', type: 'cigar-wrapper'},
];

const rollControls = (props) => (
    <div className={classes.RollControls}>
        {controls.map(ctrl => (
            <RollControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default rollControls;