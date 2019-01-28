import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //could be a stateless component
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }
  render() {
    const leafSummary = Object.keys(this.props.leaf).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.leaf[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Cigar</h3>
        <p>Rolled with the following leaf:</p>
        <ul> {leafSummary} </ul>
        <p>
          <strong>Total Roll: ${this.props.price.toFixed(2)} </strong>
        </p>
        <p>Roll Cigar?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
