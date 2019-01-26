import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Cigar from '../../components/Cigar/Cigar';

class CatadorRoller extends Component {
    state = {
        leaf: {
            Aroma: 1,
            CigarBinder: 1,
            Filler: 1,
            CigarWrapper: 1
        }
    }
    render () {
        return (
          <Aux>
              <Cigar leaf={this.state.leaf} />
              <div>Hand Rollers (build controls)</div>
          </Aux>  
        );
    }
}

export default CatadorRoller;