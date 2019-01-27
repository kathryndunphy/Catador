import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const leafSummary = Object.keys(props.leaf)
  .map(igKey => {
      return (<li key={igKey}>
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.leaf[igKey]}</li>);
  });
  return (
    <Aux>
      <h3>Your Cigar</h3>
      <p>Rolled with the following leaf:</p>
      <ul> {leafSummary} </ul>
      <p><strong>Total Roll: ${props.price.toFixed(2)} </strong></p>
      <p>Roll Cigar?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
