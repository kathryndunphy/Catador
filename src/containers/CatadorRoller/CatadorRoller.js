import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Cigar from "../../components/Cigar/Cigar";
import RollControls from "../../components/Cigar/RollControls/RollControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Cigar/OrderSummary/OrderSummary";

const LEAF_PRICES = {
  "cigar-binder": 2,
  filler: 5,
  aroma: 1,
  "cigar-wrapper": 2
};

class CatadorRoller extends Component {
  state = {
    leaf: {
      "cigar-binder": 0,
      filler: 0,
      aroma: 0,
      "cigar-wrapper": 0
    },
    totalPrice: 5,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseableState(leaf) {
    const sum = Object.keys(leaf)
      .map(igKey => {
        return leaf[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addLeafHandler = type => {
    const oldCount = this.state.leaf[type];
    const updatedCount = oldCount + 1;
    const updatedLeaf = {
      ...this.state.leaf
    };
    updatedLeaf[type] = updatedCount;
    const priceAddition = LEAF_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, leaf: updatedLeaf });
    this.updatePurchaseableState(updatedLeaf);
  };

  removeLeafHandler = type => {
    const oldCount = this.state.leaf[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedLeaf = {
      ...this.state.leaf
    };
    updatedLeaf[type] = updatedCount;
    const priceDeduction = LEAF_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, leaf: updatedLeaf });
    this.updatePurchaseableState(updatedLeaf);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Keep Rolling!");
  };

  render() {
    const disabledInfo = {
      ...this.state.leaf
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modelClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            leaf={this.state.leaf}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Cigar leaf={this.state.leaf} />
        <RollControls
          leafAdded={this.addLeafHandler}
          leafRemoved={this.removeLeafHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default CatadorRoller;
